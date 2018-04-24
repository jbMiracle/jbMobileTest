import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions.test';
import * as loginLoc from '../Objects/Locators/login';
import * as findLoadsLoc from '../Objects/Locators/findLoads';

/* Test to Check FindLoads Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('the FindLoads works without an error', async () => {
  await Act.buttonClick(loginLoc.LOGIN_BUTTON);
  await Act.buttonClick(findLoadsLoc.FINDLOADS_BUTTON);
  console.log('FindLoads Clicked Successful');
});

afterAll(async () => {
  driver.close();
  console.log('App is closed and Test Case Completed Successful');
});
