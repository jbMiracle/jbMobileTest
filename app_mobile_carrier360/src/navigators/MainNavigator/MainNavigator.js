import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { routes, initialRouteName, orderedRouteNames } from './routes';
import header from './header';
import tabBarIcon from './tabBarIcon';
import C360TabBar from '../../components/C360TabBar/C360TabBar';

const Tabs = TabNavigator(
  routes,
  {
    initialRouteName,
    order: orderedRouteNames,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: props => tabBarIcon({ ...props, navigation }),
      header,
    }),
    tabBarComponent: C360TabBar,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
  }
);

export default StackNavigator({ Tabs });
