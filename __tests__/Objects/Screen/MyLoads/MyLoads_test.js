import 'react-native';
import React from 'react';
import driver from '../../Common/Driver';

/* Sample Code Not Used any where in the code */

function myLoads() {
  return driver.waitForElementById('bottomnav_MyLoads')
    .then(myLoadsButton => myLoadsButton.click());
}

export { myLoads };
