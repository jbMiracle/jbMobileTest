import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import * as Loc from '../Objects/Locators/locators';
// import { sendKeys } from '../Common/Actions.test';

/* Test to Check Login Button is Clicked */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('Click Request Button', async () => {
  // await driver.setImplicitWaitTimeout(500);
  await Act.notificationAccept();
  await driver.sleep(500);
  await Act.buttonClick(Loc.screen.login.passwordForgotButton);
  // await driver.setImplicitWaitTimeout(500);
  await driver.sleep(500);
  /* await Act.debounce(Act.sendKeys(Loc.screen.login.enterEmail, 'taj2326@gmail.com'), 1000, {
    leading: true,
    trailing: false,
  }); */
  await Act.sendKeys(Loc.screen.login.enterEmail, 'taj2326@gmail.com');
  await driver.sleep(3000);
  //  await Act.sendKeys(Loc.screen.login.enterEmail, '\n');
  await Act.hideKeyboard(Loc.screen.login.enterEmailCaps);
  // await Act.SendKeysById(Loc.screen.login.enterEmail, '/n');
  await driver.sleep(500);
  // await driver.setImplicitWaitTimeout(500);
  await Act.buttonClick(Loc.screen.login.requestButton);
  await driver.sleep(500);
  // await driver.dismissAlert();
  console.log('Request button is Clicked Successful');
  await driver.sleep(8000);
});

afterAll(async () => {
  driver.close();
  console.log('App is closed and Test Case Completed Successful');
});
