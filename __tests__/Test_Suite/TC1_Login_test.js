import 'react-native';
import React from 'react';
import driver from '../Objects/Common/Driver';
import iosConfig from '../Objects/Common/iosConfig';
import * as Act from '../Objects/Common/index';
import * as LocL from '../Objects/Screen/Login/Login_Locators_test';

/* Test to Check Login Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(iosConfig);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

it('Check Login', async () => {
  driver.setImplicitWaitTimeout(500);
  Act.notificationAlert();
  driver.setImplicitWaitTimeout(500);
  Act.buttonClick(LocL.LOGIN_BUTTON);
  console.log('Login button is Clicked Successful');
  await driver.sleep(2000);
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});