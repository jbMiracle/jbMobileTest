import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import * as Loc from '../Objects/Locators/locators';

/* Test to Check Login Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('Click Forgot Password', async () => {
  // await driver.setImplicitWaitTimeout(500);
  await Act.notificationAccept();
  await Act.buttonClick(Loc.screen.login.passwordForgotButton);
  console.log('Forgot password button is Clicked Successful');
  await driver.sleep(12000);
});

afterAll(async () => {
  driver.close();
  console.log('App is closed and Test Case Completed Successful');
});
