import React from 'react';
import { TabBarTop, TabNavigator, StackNavigator } from 'react-navigation';
import C360Colors from '../../themes/360Colors';
import styles from './DynamicTabBar.style';
import LoadDetails from '../../screens/MyLoads/LoadDetails/LoadDetails';
import OfferDetails from '../../screens/Offers/OfferDetails/OfferDetails';

export default (tabs, parent) => {
  const initialRouteName = tabs[0].screenName;
  const sharedHeaderConfig = { headerMode: 'none' };

  const tabRoutes = {};
  tabs.forEach((screen) => {
    tabRoutes[screen.screenName] = { screen: screen.component };
  });

  const DynamicTabs = TabNavigator(
    tabRoutes,
    {
      initialRouteName,
      tabBarPosition: 'top',
      swipeEnabled: false,
      animationEnabled: true,
      tabBarComponent: props => (
        <TabBarTop { ...props } indicatorStyle={ styles.indicatorStyle } />
      ),
      tabBarOptions: {
        style: styles.tabBarStyle,
        tabStyle: styles.tabStyle,
        activeTintColor: C360Colors.White,
        upperCaseLabel: false,
        labelStyle: styles.labelStyle,
      },
    }
  );
  const finalStack = { DynamicTabs };

  switch (parent) {
    case 'MyLoads':
      finalStack['Load Details'] = { screen: LoadDetails };
      break;
    case 'Offers':
      finalStack['Offer Details'] = { screen: OfferDetails };
      break;
    default:
      break;
  }

  return StackNavigator(finalStack, sharedHeaderConfig);
};
