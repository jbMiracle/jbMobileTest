import path from 'path';
import wd from 'wd';

const configAll = {

  localConfigIos: {
    platformName: 'iOS',
    deviceName: 'iPhone 7',
    platformVersion: '11.3',
    app: path.resolve('ios/build/Build/Products/Debug-iphonesimulator/app_mobile_carrier360.app'),
    automationName: 'XCUITest',
  },
  remoteConfigIos: {
    'browserstack.user': process.env.USERNAME,
    'browserstack.key': process.env.ACCESSKEY,
    build: 'Node iOS',
    name: 'Carrier',
    device: 'iPhone 7 Plus',
    'os.version': '10.3',
    app: process.env.BUILD_HASH,
    'browserstack.debug': true,
    automationName: 'XCUITest',
  },
  localConfigAndroid: {
    platformName: 'Android',
    deviceName: 'Nexus 6P API 27',
    platformVersion: '8.1',
    app: path.resolve('android/app/build/outputs/apk/app-debug.apk'),
    automationName: 'UiAutomator2',
    appWaitActivity: '.MainActivity',
  },
  remoteConfigAndroid: {
    'browserstack.user': process.env.USERNAME,
    'browserstack.key': process.env.ACCESSKEY,
    build: 'Node iOS',
    name: 'Carrier',
    device: 'Samsung Galaxy S8',
    'os.version': '7.0',
    app: process.env.BUILD_HASH,
    'browserstack.debug': true,
  },
};

let theConfig;
let theDriver;
const REMOTE_URL = 'https://hub-cloud.browserstack.com/wd/hub';

if (process.env.PLATFORM_NAME === 'iOS') {
  if (process.env.TEST_ENV === 'REMOTE') {
    theConfig = configAll.remoteConfigIos;
    theDriver = wd.promiseRemote(REMOTE_URL);
  } else {
    theConfig = configAll.localConfigIos;
    theDriver = wd.promiseChainRemote('localhost', 4723);
  }
}

if (process.env.PLATFORM_NAME === 'Android') {
  if (process.env.TEST_ENV === 'REMOTE') {
    theConfig = configAll.remoteConfigAndroid;
    theDriver = wd.promiseRemote(REMOTE_URL);
  } else {
    theConfig = configAll.localConfigAndroid;
    theDriver = wd.promiseChainRemote('localhost', 4723);
  }
}

export const config = theConfig;
export const driver = theDriver;
