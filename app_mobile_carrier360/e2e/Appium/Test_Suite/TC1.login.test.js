import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions.test';
import * as Loc from '../Objects/Locators/locators';

/* Test to Check Login Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

it('Check Login', async () => {
  // driver.setImplicitWaitTimeout(500);
  Act.notificationAccept();
  Act.buttonClick(Loc.screen.login.loginButton);
  await driver.sleep(3000);
});

afterAll(async () => {
  // await driver.sleep(3000);
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
