/*
import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import * as Loc from '../Objects/Locators/locators';

/!* Test to Check Login Button is Clicked *!/

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

it('Check Login', async () => {
  // driver.setImplicitWaitTimeout(500);
  Act.notificationAccept();
  Act.buttonClick(Loc.screen.login.loginButton);
  await driver.sleep(3000);
});

afterAll(async () => {
  // await driver.sleep(3000);
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
*/
import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import { locators } from '../Common/Locators';
import * as Core from '../common/core';

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

it('Check Login', async () => {
  driver.setImplicitWaitTimeout(500);
  // Act.notificationAccept();
  // driver.waitForElementByXPath('//XCUIElementTypeAlert[@name=\'accept\']').click();
  driver.execute('mobile:alert', { action: 'accept' });
  // driver.waitForElementByXPath('//XCUIElementTypeButton[@name=\'Allow\']').click();
  driver.setImplicitWaitTimeout(500);
  // await Act.sendKeys(screen.loginPassword.username, 'icsuser');
  await Act.slowkey(locators.loginPassword.username, 'icsuser', 0);
  await driver.sleep(2000);
  // await Act.sendKeys(screen.loginPassword.password, 'demo');
  await Act.slowkey(locators.loginPassword.password, 'demo', 0);
  driver.setImplicitWaitTimeout(500);
  await Act.buttonClick(locators.loginPassword.loginButton);
  console.log('Login button is Clicked Successful');
  // await driver.sleep(5000);
});
// ***************** main
export const login = async (username, password) => {
  // await Core.buttonClick(locators.login.username);
  // await Core.deleteText(locators.login.username);
  await Core.slowkey(locators.login.username, username);
  // await Core.buttonClick(locators.login.password);
  await Core.slowkey(locators.login.password, password);
  await Core.hideKeyboard(locators.login.password);
  await Core.buttonClick(locators.login.loginButton);
};

// in test case navigation
// await Act.login('jbhcac05', 'being747');

//

afterAll(async () => {
  driver.close();
  console.log('App is closed and Test Case Completed Successful');
});
