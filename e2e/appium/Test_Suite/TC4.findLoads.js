/*
import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import * as Loc from '../Objects/Locators/locators';

/!* Test to Check FindLoads Button is Clicked *!/

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

test('Check FindLoads', async () => {
  driver.setImplicitWaitTimeout(500);
  Act.notificationAccept();
  await Act.buttonClick(Loc.screen.login.loginButton);
  await Act.buttonClick(Loc.bottomNav.findLoads);
  console.log('FindLoads Clicked Successful');
  await driver.sleep(2000);
});

afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});
*/
import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import { screen } from '../Common/Locators';

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);
  console.log('Configuration Setup completed Successful');
});

it('Check findloads', async () => {
  driver.setImplicitWaitTimeout(500);
  Act.notificationAccept();
  driver.setImplicitWaitTimeout(500);
  // await Act.sendKeys(screen.loginPassword.username, 'icsuser');
  await Act.slowkey(screen.loginPassword.username, 'icsuser', 0);
  await driver.sleep(2000);
  // await Act.sendKeys(screen.loginPassword.password, 'demo');
  await Act.slowkey(screen.loginPassword.password, 'demo', 0);
  driver.setImplicitWaitTimeout(500);
  await Act.buttonClick(screen.loginPassword.loginButton);
  await Act.buttonClick(screen.findLoads.findloadsButton);
  await driver.sleep(5000);


  console.log('FindLoads button is Clicked Successful');
});

// main starts ***********
// it('can click the Find Loads', async () => {
//   await Act.login('jbhcac05', 'being747');
//   await driver.setImplicitWaitTimeout(20000);
//   await Core.buttonClick(locators.bottomNav.findLoads);
//   await Act.logout();
// });
// main ends ***********



afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});


