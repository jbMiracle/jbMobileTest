import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions.test';
import * as Loc from '../Objects/Locators/locators';

/* Test to Check MyLoads Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('Check MyLoads Acceptance', async () => {
  driver.setImplicitWaitTimeout(500);
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
  await driver.sleep(100000);
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
