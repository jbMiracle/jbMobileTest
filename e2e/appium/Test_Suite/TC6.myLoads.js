/* import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import * as Loc from '../Objects/Locators/locators';
import { screen } from '../Common/Locators'; */
import { forEach } from 'lodash';
import { config, driver } from '../config/config';
import * as TestPlans from '..tests/index';
import * as Core from '../common/core';

/* Test to Check MyLoads Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('Check MyLoads Acceptance', async () => {
  /* driver.setImplicitWaitTimeout(500);
  Act.notificationAccept();
  await Act.buttonClick(Loc.screen.login.loginButton);
  await Act.buttonClick(Loc.bottomNav.myLoads);
  await driver.sleep(2000); */
  driver.setImplicitWaitTimeout(500);
  Act.notificationAccept();
  driver.setImplicitWaitTimeout(500);
  // await Act.sendKeys(screen.loginPassword.username, 'icsuser');
  await Act.slowkey(screen.loginPassword.username, 'icsuser', 0);
  await driver.sleep(2000);
  // await Act.sendKeys(screen.loginPassword.password, 'demo');
  await Act.slowkey(screen.loginPassword.password, 'demo', 0);
  driver.setImplicitWaitTimeout(500);
  await Act.buttonClick(screen.loginPassword.loginButton);
  await Act.buttonClick(screen.myLoads.myLoadsButton);
  await driver.sleep(5000);
});

// main starts ***********

/* it('can load the My Loads screen', async () => {
  await Act.login('jbhcac05', 'being747');
  await driver.setImplicitWaitTimeout(20000);
  await Core.buttonClick(locators.bottomNav.myLoads);
  await Act.logout();
}); */
// main ends ********

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
