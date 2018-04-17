import 'react-native';
import React from 'react';
import driver from '../Objects/Common/Driver';
import iosConfig from '../Objects/Common/iosConfig';
import * as Act from '../Objects/Common/index';
import * as LocL from '../Objects/Screen/Login/Login_Locators_test';
import * as LocM from '../Objects/Screen/MyLoads/MyLoads_Locators_test';

/* Test to Check MyLoads Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(iosConfig);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('Check MyLoads Completed', async () => {
  driver.setImplicitWaitTimeout(500);
  Act.notificationAlert();
  await Act.buttonClick(LocL.LOGIN_BUTTON);
  await Act.buttonClick(LocM.MYLOADS_BUTTON);
  // driver.elementByXPath('//XCUIElementTypeButton[@name=\'Driver Assignment\']').click();
  driver.setImplicitWaitTimeout(500);
  Act.buttonClickXPath(LocM.MYLOADS_COMPLETED_BUTTON);
  driver.setImplicitWaitTimeout(1000);
  console.log('Complete Button Clicked Successful');
  await driver.sleep(10000);
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
