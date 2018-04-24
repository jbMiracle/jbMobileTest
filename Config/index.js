import 'react-native';
import React from 'react';
import wd from 'wd';
import localConfig from './iosConfig_local';
import remoteConfig from './iosConfig_Remote';

let indexConfig;
let indexDriver;

if (process.env.TEST_ENV === 'REMOTE') {
  indexConfig = remoteConfig;
  indexDriver = wd.promiseRemote('https://hub-cloud.browserstack.com/wd/hub');
} else {
  indexConfig = localConfig;
  indexDriver = wd.promiseChainRemote('localhost', 4723);
}
export const config = indexConfig;
export const driver = indexDriver;


