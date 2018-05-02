import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import { screen, bottomNav } from '../Common/Locators';

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('Check Offers', async () => {
  driver.setImplicitWaitTimeout(500);
  await Act.notificationAlert();
  await Act.buttonClick(screen.login.loginButton);
  await Act.buttonClick(bottomNav.offers);
  await Act.buttonClickXPath(screen.offers.inactiveOfferTab);
  console.log('Offers Button Clicked Successful');
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
