import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import * as Loc from '../Objects/Locators/locators';
import { screen } from '../Common/Locators';

/* Test to Check MyLoads Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('Check MyLoads Acceptance', async () => {
  /* driver.setImplicitWaitTimeout(500);
  await Act.notificationAccept();
  await Act.buttonClick(Loc.screen.login.loginButton);
  await Act.buttonClick(Loc.bottomNav.myLoads);
  driver.setImplicitWaitTimeout(500);
  await Act.buttonClickXPath(Loc.screen.myLoads.driverAssignmentTab);
  driver.setImplicitWaitTimeout(500);
  await Act.buttonClickXPath(Loc.screen.myLoads.acceptanceTab);
  driver.setImplicitWaitTimeout(500);
  await Act.buttonClickXPath(Loc.screen.myLoads.driverAssignmentTab);
  driver.setImplicitWaitTimeout(500);
  console.log('Acceptance Button Clicked Successful');
  await driver.sleep(100000); */
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
  driver.setImplicitWaitTimeout(500);
  await Act.buttonClickXPath(screen.myLoads.driverAssignmentTab);
  driver.setImplicitWaitTimeout(500);
  await Act.buttonClickXPath(screen.myLoads.acceptanceTab);
  driver.setImplicitWaitTimeout(500);
  console.log('Acceptance Button Clicked Successful');
  await driver.sleep(8000);
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
