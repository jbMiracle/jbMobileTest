import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions.test';
import * as loginLoc from '../Objects/Locators/login';

/* Test to Check Login Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

it('Check Login', async () => {
  await driver.execute('mobile:alert', { action: 'accept' });
  Act.buttonClick(loginLoc.LOGIN_BUTTON);
  console.log('Login button is Clicked Successful');
});

afterAll(async () => {
  driver.close();
  console.log('App is closed and Test Case Completed Successful');
});
