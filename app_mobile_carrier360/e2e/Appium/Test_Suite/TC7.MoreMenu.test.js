import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions.test';
import * as Loc from '../Objects/Locators/locators';

/* Test to Check Home Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(200);
  console.log('Configuration Setup completed Successful');
});

test('Check Home', async () => {
  // driver.setImplicitWaitTimeout(500);
  await Act.notificationAccept();
  await Act.buttonClick(Loc.screen.login.loginButton);
  await driver.sleep(2000);
  await Act.buttonClick(Loc.screen.home.ShowLoadsButton);
  await Act.buttonClick(Loc.header.backButton);
  await driver.waitForElementById('moreMenu_button').click();
  console.log('Home Button Clicked Successful');
  await driver.sleep(12000);
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
