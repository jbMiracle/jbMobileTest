
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


// main start ********
it('can load the moremenuProfile button', async () => {
  await Act.login('jbhcac05', 'being747');
  await driver.setImplicitWaitTimeout(20000);
  await Act.moreMenuProfile();
});
// main ends ******

afterAll(async () => {
  driver.close();
  console.log('App is closed and Test Case Completed Successful');
});
