import 'react-native';
import React from 'react';
import driver from '../../Common/Driver';

/* Sample Code Not Used any where in the code */

function perks() {
  return driver.waitForElementById('bottomnav_Perks')
    .then(perksButton => perksButton.click());
}

export default perks;

