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

test('Check MyLoads In transit', async () => {
  await driver.setImplicitWaitTimeout(500);
  await Act.notificationAccept();
  await Act.buttonClick(Loc.screen.login.loginButton);
  await Act.buttonClick(Loc.bottomNav.myLoads);
  await driver.setImplicitWaitTimeout(500);
  await Act.buttonClickXPath(Loc.screen.myLoads.inTransitTab);
  driver.setImplicitWaitTimeout(500);
  await Act.buttonClick(Loc.screen.myLoads.inTransitShwLdButton);
  driver.setImplicitWaitTimeout(500);
  await Act.buttonClick(Loc.header.backButton);
  console.log('In transit Button Clicked Successful');
  driver.setImplicitWaitTimeout(500);
  await driver.sleep(12000);
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
