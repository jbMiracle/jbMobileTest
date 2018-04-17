import 'react-native';
import React from 'react';
import wd from 'wd';

const driver = wd.promiseChainRemote('localhost', '4723')

export default driver;
