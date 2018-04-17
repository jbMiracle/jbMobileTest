import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import driver from '../Objects/Common/Driver';
import iosConfig from '../Objects/Common/iosConfig';
import * as Act from '../Objects/Common/index';
import * as LocL from '../Objects/Screen/Login/Login_Locators_test';
import * as LocO from '../Objects/Screen/Offers/Offers_Locators_test';
import * as LocH from '../Objects/Screen/Home/Home_Locators_test';
/* Test to Check Home Button is Clicked */
jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(iosConfig);
  await driver.sleep(200);
  console.log('Configuration Setup completed Successful');
});

test('Check HomeSpecifiLoads', async () => {
  driver.setImplicitWaitTimeout(500);
  Act.notificationAlert();
  await Act.buttonClick(LocL.LOGIN_BUTTON); // we can declare in const data1 = await to use the return value
  await Act.buttonClick(LocO.OFFERS_BUTTON);
  await Act.buttonClick(LocH.HOME_BUTTON);
  await Act.buttonClick(LocH.HOME_SHOW_LOADS_BUTTON);
  await Act.buttonClick(LocH.HOME_BACK_BUTTON);
  console.log('Home Button Clicked Successful');
  await driver.sleep(10000);
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});

