import 'react-native';
import React from 'react';
import driver from '../../Common/Driver';

/* Sample Code Not Used any where in the code */

function Offers() {
  return driver.waitForElementById('bottomnav_Offers')
    .then(offerButton => offerButton.click());
}

export default Offers;
