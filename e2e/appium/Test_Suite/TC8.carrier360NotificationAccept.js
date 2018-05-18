import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import * as Loc from '../Objects/Locators/locators';
import * as Core from "../common/core";

/* Test to Check if the notification is accepted */

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

it('Check Allow notify', async () => {
  driver.setImplicitWaitTimeout(500);
  Act.notificationAccept();
  // await Act.buttonClick(Loc.screen.login.loginButton);
  await driver.sleep(2000);
});

//main starts ********
// await Core.acceptPrompt();
// main ends *******
afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
