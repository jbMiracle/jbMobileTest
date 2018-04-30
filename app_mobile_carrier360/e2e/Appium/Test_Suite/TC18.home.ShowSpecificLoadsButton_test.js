import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions.test';
import * as Loc from '../Objects/Locators/locators';

/* Test to Check Home - show specific Loads Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(200);
  console.log('Configuration Setup completed Successful');
});

test('Check HomeSpecifiLoads', async () => {
  driver.setImplicitWaitTimeout(500);
  Act.notificationAccept();
  await Act.buttonClick(Loc.screen.login.loginButton); // we can declare in const data1 = await to use the return value
  await Act.buttonClick(Loc.screen.home.ShowLoadsButton);
  await Act.buttonClick(Loc.header.backButton);
  await driver.sleep(10000);
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});

