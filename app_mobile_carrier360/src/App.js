import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import { MenuProvider } from 'react-native-popup-menu';
import reduxManager from './state/redux';
import RootNavigator from './navigators';
import getTheme from './themes/defaultTheme/components';
import platform from './themes/defaultTheme/variables/platform';
import { initializeNotifications } from './services/notifications';

export default class App extends Component {
  componentDidMount() {
    initializeNotifications();
  }

  render() {
    return (
      <StyleProvider style={ getTheme(platform) }>
        <MenuProvider>
          <Provider store={ reduxManager.store }>
            <RootNavigator />
          </Provider>
        </MenuProvider>
      </StyleProvider>
    );
  }
}
