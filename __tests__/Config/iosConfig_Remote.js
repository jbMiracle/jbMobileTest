import 'react-native';
import React from 'react';

const remoteConfig = {
  'browserstack.user': process.env.USERNAME,
  'browserstack.key': process.env.ACCESSKEY,
  build: 'Node iOS',
  name: 'Carrier',
  device: 'iPhone 7 Plus',
  'os.version': '10.3',
  app: process.env.IPA_HASH,
  'browserstack.debug': true,
  automationName: '__tests__',
  framework: 'mocha',
};

export default remoteConfig;
