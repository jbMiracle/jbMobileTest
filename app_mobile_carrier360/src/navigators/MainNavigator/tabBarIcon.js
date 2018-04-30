import React from 'react';
import PropTypes from 'prop-types';
import C360TabButton from '../../components/C360TabButton/C360TabButton';
import C360Colors from '../../themes/360Colors';
import strings from '../../services/localization';
import { camelToSnake } from '../../utilties';

const {
  Blue500,
  Grey300,
  Grey600,
  White,
} = C360Colors;

const iconMap = {
  Home: 'jbh-Home',
  MyLoads: 'jbh-Trailers',
  FindLoads: 'jbh-Search',
  Offers: 'jbh-Tag',
  Perks: 'jbh-Perks',
};

const getBackgroundColor = (focused, routeName) => {
  if (routeName === 'FindLoads') {
    return focused ? Blue500 : Grey300;
  }

  return focused ? Grey300 : White;
};

const MainRouteName = 'FindLoads';
const unfocusedTintColor = Grey600;
const focusedTintColor = Blue500;
const focusedIconColor = routeName => (routeName === MainRouteName ? Grey300 : focusedTintColor);
const bottomNavOptions = { scope: 'BottomNav' };

const getPresentation = (navigation, routeName, focused) => ({
  backgroundColor: getBackgroundColor(focused, routeName),
  indicator: focused ? focusedTintColor : 'transparent',
  main: routeName === MainRouteName,
  tintColor: focused ? focusedTintColor : unfocusedTintColor,
  mainIconColor: focused ? focusedIconColor(routeName) : unfocusedTintColor,
  onPress: focused ? navigation.popToTop : () => navigation.navigate(routeName),
  title: strings(camelToSnake(routeName), bottomNavOptions),
});

const tabBarIcon = ({ focused, navigation }) => {
  const { routeName } = navigation.state;
  const iconName = iconMap[routeName];

  return (
    <C360TabButton
      id={ routeName }
      name={ iconName }
      size={ 25 }
      { ...getPresentation(navigation, routeName, focused) }
    />
  );
};

tabBarIcon.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  focused: PropTypes.bool.isRequired,
};

export default tabBarIcon;
