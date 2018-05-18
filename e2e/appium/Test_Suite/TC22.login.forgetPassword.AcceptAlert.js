import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import * as Loc from '../Objects/Locators/locators';

/* Test to Check Login Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('Click Forgot Password', async () => {
  // await driver.setImplicitWaitTimeout(500);
  await Act.notificationAccept();
  await Act.buttonClick(Loc.screen.login.passwordForgotButton);
  // await driver.setImplicitWaitTimeout(500);
  await Act.sendKeys(Loc.screen.login.enterEmail, 'taj2326@gmail.com');
  await driver.sleep(5000);
  //  await Act.sendKeys(Loc.screen.login.enterEmail, '\n');
  await Act.hideKeyboard(Loc.screen.login.enterEmailCaps);
  // await Act.SendKeysById(Loc.screen.login.enterEmail, '/n');
  await driver.sleep(5000);
  // await driver.setImplicitWaitTimeout(500);
  await Act.buttonClick(Loc.screen.login.requestButton);
  await driver.acceptAlert();
  console.log('Login button is Clicked Successful');
  await driver.sleep(12000);
});

afterAll(async () => {
  driver.close();
  console.log('App is closed and Test Case Completed Successful');
});
