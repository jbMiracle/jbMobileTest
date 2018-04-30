const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer');

function isDirectory(aPath) {
  return fs.statSync(aPath).isDirectory();
}

async function getMatchingDirs(basePath, pattern) {
  if (!isDirectory(basePath)) {
    console.error(`${basePath} is not a directory. Unable to locate the Xcode DerivedData directory.`);
    return [];
  }
  const allDirs = await fs.readdir(basePath);
  const regex = new RegExp(pattern);
  const isMatch = dir => regex.test(dir);
  const isDirectoryHere = name => isDirectory(path.join(basePath, name));
  const matchingDirs = allDirs.filter(isMatch).filter(isDirectoryHere);
  return matchingDirs;
}

const createDirectoryChoice = name => ({ name, checked: true });

const createDirectorySelectQuestion = directoryNames => ({
  type: 'checkbox',
  message: 'Select which directories should be removed',
  name: 'selectedDirs',
  choices: directoryNames.map(createDirectoryChoice),
});

async function getChosenDirsFrom(basePath, dirs) {
  const question = createDirectorySelectQuestion(dirs);
  const { selectedDirs } = await inquirer.prompt([question]);
  return selectedDirs.map(dirName => path.join(basePath, dirName));
}

async function getChosenMatchingDirs(basePath, pattern) {
  const dirs = await getMatchingDirs(basePath, pattern);
  if (dirs.length === 0) {
    console.info(`No directories in ${basePath} matching ${pattern}`);
    return [];
  }
  return getChosenDirsFrom(basePath, dirs);
}

async function removeAll(pathsToRemove) {
  const rmrf = dirPath => fs.remove(dirPath);
  return Promise.all(pathsToRemove.map(rmrf));
}

module.exports = {
  getChosenDirsFrom,
  getChosenMatchingDirs,
  removeAll,
};
