#!/usr/bin/env node

const { getChosenDirsFrom, removeAll } = require('./nuke-interactive');

const commandArgs = process.argv.slice(2);

if (commandArgs.length < 1) {
  console.error('Please provide paths to directories to remove');
  process.exit(1);
}

async function interactivelyRemoveDirs() {
  const pathsToRemove = await getChosenDirsFrom('.', commandArgs);
  await removeAll(pathsToRemove);
  console.info('Finished. Hope everything is OK.');
}

interactivelyRemoveDirs();
