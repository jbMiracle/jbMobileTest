import 'react-native';
import React from 'react';
import driver from '../../Common/Driver';

/* Sample Code Not Used any where in the code */

function findLoads() {
  return driver.waitForElementById('bottomnav_FindLoads')
    .then(findloadsButton => findloadsButton.click());
}

export default findLoads;
