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

it('Check Login', async () => {
  driver.setImplicitWaitTimeout(500);
  Act.notificationAccept();
  driver.setImplicitWaitTimeout(500);
  await Act.sendKeys(screen.loginPassword.username, 'icsuser');
  await driver.sleep(2000);
  await Act.sendKeys(screen.loginPassword.password, 'demo');
  await Act.buttonClick(screen.login.loginButton);
  console.log('Login button is Clicked Successful');
});

afterAll(async () => {
  driver.close();
  console.log('App is closed and Test Case Completed Successful');
});
