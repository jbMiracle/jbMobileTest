import { locators } from '../common/locators';
import { driver } from '../config/config';
import * as Core from '../common/core';

export const logout = async () => {
  await Core.buttonClick(locators.bottomNav.home);
  await Core.buttonClick(locators.header.moreMenu.icon);
  await Core.buttonClick(locators.header.moreMenu.logOut);
  await driver.sleep(2000);
  await Core.acceptPrompt();
};
// in test case navigation
// await Act.logout();
