import React from 'react';
import { SwitchNavigator } from 'react-navigation';
import Auth from './AuthNavigator';
import Main from './MainNavigator';
import Splash from '../screens/Splash/Splash';
import StyleGuide from '../screens/StyleGuide/StyleGuide';

export const initialRouteName = 'Splash';

export const AppNavigator = SwitchNavigator(
  {
    Auth,
    Main,
    Splash,
    StyleGuide,
  },
  {
    initialRouteName,
  }
);
