import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions.test';
import * as Loc from '../Objects/Locators/locators';

/* Test to Check Offers Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('Check ActiveOffers', async () => {
  driver.setImplicitWaitTimeout(500);
  Act.notificationAccept();
  await Act.buttonClick(Loc.screen.login.loginButton);
  await Act.buttonClick(Loc.bottomNav.offers);
  driver.setImplicitWaitTimeout(500);
  Act.buttonClickXPath(Loc.screen.offers.inactiveOffersTab);
  driver.sleep(500);
  Act.buttonClickXPath(Loc.screen.offers.activeOffersTab);
  await driver.sleep(10000);
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
