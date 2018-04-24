import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions.test';
import * as loginLoc from '../Objects/Locators/login';
import * as offersLoc from '../Objects/Locators/offers';
import * as homeLoc from '../Objects/Locators/home';

/* Test to Check Home Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(200);
  console.log('Configuration Setup completed Successful');
});

test('Check Home', async () => {
  await Act.buttonClick(loginLoc.LOGIN_BUTTON); // we can declare in const data1 = await to use the return value
  await Act.buttonClick(offersLoc.OFFERS_BUTTON);
  await Act.buttonClick(homeLoc.HOME_BUTTON);
  console.log('Home Button Clicked Successful');
});

// test('the Home fails with an error', async () => {
//   // const data1 = await Act.buttonClick(LocL.LOGIN_BUTTON); As login is already login no need to call
//   await Act.buttonClick(LocO.OFFER_BUTTON);
//   await Act.buttonClick(LocH.HOME_BUTTON);
//   console.log('I am done with error testing ');
// });

afterAll(async () => {
  driver.close();
  console.log('App is closed and Test Case Completed Successful');
});
