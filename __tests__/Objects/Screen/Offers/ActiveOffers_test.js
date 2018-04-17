import 'react-native';
import React from 'react';
import driver from '../../Common/Driver';

function ActiveOffers() {
  return driver.waitForElementById('offers_activeOfferButton')
    .then(homeButton => homeButton.click());
}

export default ActiveOffers;













