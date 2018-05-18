/*
import 'react-native';
import React from 'react';
import { config, driver } from '../Config/index';
import * as Act from '../Common/Actions';
import * as Loc from '../Objects/Locators/locators';

/!* Test to Check Home Button is Clicked *!/

jest.setTimeout(100000);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(200);
  console.log('Configuration Setup completed Successful');
});

test('Check Home', async () => {
  driver.setImplicitWaitTimeout(500);
  Act.notificationAccept();
  await Act.buttonClick(Loc.screen.login.loginButton);
  await Act.buttonClick(Loc.bottomNav.offers);
  await Act.buttonClick(Loc.bottomNav.home);
  await driver.sleep(3000);
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

it('Check Home', async () => {
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
  await Act.buttonClick(screen.offers.offersButton);
  await Act.buttonClick(screen.home.homeButton);
  await driver.sleep(5000);

  console.log('Home button is Clicked Successful');
});



// main ***********
/* it('can load the home screen', async () => {
  await Act.login('jbhcac05', 'being747');
  await driver.setImplicitWaitTimeout(20000);
  await Core.buttonClick(locators.bottomNav.offers);
  await Core.buttonClick(locators.bottomNav.home);
  await Act.logout();
}); */
// main ends ***********




afterAll(async () => {
  driver.quit();
  console.log('App is closed and Test Case Completed Successful');
});

