import 'react-native';
import React from 'react';
import driver from '../../Common/Driver';

/* Sample Code Not Used any where in the code */

function Home() {
  return driver.waitForElementById('bottomnav_Home')
    .then(homeButton => homeButton.click());
}

export default Home;
