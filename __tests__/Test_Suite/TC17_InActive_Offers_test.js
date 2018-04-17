import 'react-native';
import React from 'react';
import driver from '../Objects/Common/Driver';
import iosConfig from '../Objects/Common/iosConfig';
import * as Act from '../Objects/Common/index';
import * as LocL from '../Objects/Screen/Login/Login_Locators_test';
import * as LocO from '../Objects/Screen/Offers/Offers_Locators_test';

/* Test to Check Offers Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(iosConfig);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('Check InActiveOffers', async () => {
  driver.setImplicitWaitTimeout(500);
  Act.notificationAlert();
  await Act.buttonClick(LocL.LOGIN_BUTTON);
  await Act.buttonClick(LocO.OFFERS_BUTTON);
  await Act.buttonClick(LocO.SHOW_OFFERBUTTON);
  await Act.buttonClick(LocO.BACK_BUTTON);
  driver.setImplicitWaitTimeout(500);
  Act.buttonClickXPath(LocO.INACTIVE_OFFERBUTTON);
  console.log('In active Offers Button Clicked Successful');
  await driver.sleep(10000);
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});