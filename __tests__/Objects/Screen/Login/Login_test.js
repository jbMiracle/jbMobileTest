import 'react-native';
import React from 'react';
import driver from '../../Common/Driver';

/* Sample Code Not Used any where in the code */

function login() {
  return driver.waitForElementById('login_loginButton')
    .then(loginButton => loginButton.click());
}

export default login;
