import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions.test';
import * as loginLoc from '../Objects/Locators/login';
import * as offersLoc from '../Objects/Locators/offers';

/* Test to Check Offers Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('Check Offers', async () => {
  await Act.buttonClick(loginLoc.LOGIN_BUTTON);
  await Act.buttonClick(offersLoc.OFFERS_BUTTON);
  await Act.buttonClick(offersLoc.SHOW_OFFER);
  await Act.buttonClick(offersLoc.BACK_BUTTON);
  // driver.elementById('Inactive Offers').click();
  // driver.elementByXPath('//XCUIElementTypeButton[@name=\'Inactive Offers\']').click();
  console.log('Offers Button Clicked Successful');
});

afterAll(async () => {
  driver.close();
  console.log('App is closed and Test Case Completed Successful');
});
