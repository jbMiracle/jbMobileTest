import { forEach } from 'lodash';
import { config, driver } from '../config/config';
import * as TestPlans from './index';
import * as Core from '../common/core';

jest.setTimeout(100000);

beforeAll(async () => {
  console.log('----- Setting Up -----');
  await driver.init(config);
  await driver.sleep(2000);
  await driver.setImplicitWaitTimeout(500);
  await acceptNotificationPrompt();
});

describe('All Tests', async () => {
  if (process.env.TEST_PLAN) {
    console.log(`Running single TestPlan: ${process.env.TEST_PLAN}`);
    // await TestPlans[process.env.TEST_PLAN]();
    await TestPlans.navigation();
  } else {
    console.log('Running all TestPlans');
    forEach(Object.keys(TestPlans), async testPlan => TestPlans[testPlan]());
  }
});

afterAll(async () => {
  console.log('----- Tearing Down -----');
  await driver.close();
});

async function acceptNotificationPrompt() {
  await Core.acceptPrompt();
  // if (process.env.PLATFORM_NAME === 'iOS') {
  //   await Core.buttonClickXPath('//XCUIElementTypeButton[@name="Allow"]');
  // } else {
  //   console.log('Ignoring notification alert for Android');
  // }
}
