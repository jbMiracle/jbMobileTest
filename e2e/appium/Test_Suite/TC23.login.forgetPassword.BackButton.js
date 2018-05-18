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

test('Click Forgot Password back button', async () => {
  await Act.notificationAccept();
  await Act.buttonClick(Loc.screen.login.passwordForgotButton);
  console.log('Forgot Password back button is Clicked Successful');
  await Act.buttonClick(Loc.screen.login.backButton);
  await driver.sleep(12000);
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
