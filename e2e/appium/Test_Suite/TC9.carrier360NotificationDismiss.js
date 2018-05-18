import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import * as Loc from '../Objects/Locators/locators';

/* Test to Check if the notification is Dismissed */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

it('Check Dont Allow notify', async () => {
  driver.setImplicitWaitTimeout(500);
  Act.notificationDismiss();
  // await Act.buttonClick(screen.login.loginButton);
  await driver.sleep(2000);
});
//main starts ********
// await Core.dissmissPrompt();
// main ends *******
afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
