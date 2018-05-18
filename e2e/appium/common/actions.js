import { forEach } from 'lodash';
import * as Core from './core';
import { locators } from './locators';
import { driver } from '../config/config';

export const login = async (username, password) => {
  // await Core.buttonClick(locators.login.username);
  // await Core.deleteText(locators.login.username);
  await Core.slowkey(locators.login.username, username);
  // await Core.buttonClick(locators.login.password);
  await Core.slowkey(locators.login.password, password);
  await Core.hideKeyboard(locators.login.password);
  await Core.buttonClick(locators.login.loginButton);
};

export const logout = async () => {
  await Core.buttonClick(locators.bottomNav.home);
  await Core.buttonClick(locators.header.moreMenu.icon);
  await Core.buttonClick(locators.header.moreMenu.logOut);
  await driver.sleep(2000);
  await Core.acceptPrompt();
};
export const moreMenu = async () => {
  await Core.buttonClick(locators.bottomNav.home);
  await Core.buttonClick(locators.header.moreMenu.icon);
  await driver.sleep(2000);
  // await Core.acceptPrompt();
};
export const moreMenuProfile = async () => {
  await Core.buttonClick(locators.bottomNav.home);
  await Core.buttonClick(locators.header.moreMenu.icon);
  await Core.buttonClick(locators.header.moreMenu.profile);
  await driver.sleep(2000);
  // await Core.acceptPrompt();
};
export const moreMenuManageUsers = async () => {
  await Core.buttonClick(locators.bottomNav.home);
  await Core.buttonClick(locators.header.moreMenu.icon);
  await Core.buttonClick(locators.header.moreMenu.manageUsers);

  await driver.sleep(2000);
  // await Core.acceptPrompt();
};
export const moreMenuFeedback = async () => {
  await Core.buttonClick(locators.bottomNav.home);
  await Core.buttonClick(locators.header.moreMenu.icon);
  await Core.buttonClick(locators.header.moreMenu.feedback);

  await driver.sleep(2000);
  // await Core.acceptPrompt();
};
export const notificationMenu = async () => {
  await Core.buttonClick(locators.bottomNav.home);
  await Core.buttonClick(locators.header.notificationMenu.icon);
  // await Core.buttonClick(locators.header.moreMenu.feedback);

  await driver.sleep(2000);
  // await Core.acceptPrompt();
};
