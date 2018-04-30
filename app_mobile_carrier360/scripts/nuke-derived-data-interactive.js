#!/usr/bin/env node

const path = require('path');
const { getChosenMatchingDirs, removeAll } = require('./nuke-interactive');

const HomeDir = process.env.HOME;
const DerivedDataPath = path.join(HomeDir, 'Library', 'Developer', 'Xcode', 'DerivedData');
const commandArgs = process.argv.slice(2);

if (commandArgs.length < 1) {
  console.error('Please provide a pattern to match directory names');
  process.exit(1);
}

const targetPattern = commandArgs[0];

async function interactivelyRemoveDerivedData() {
  const pathsToRemove = await getChosenMatchingDirs(DerivedDataPath, targetPattern);
  await removeAll(pathsToRemove);
  console.info('Finished. Hope everything is OK.');
}

interactivelyRemoveDerivedData();
