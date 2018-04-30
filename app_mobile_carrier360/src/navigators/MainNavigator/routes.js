import { StackNavigator } from 'react-navigation';
import { mapValues } from 'lodash';
import Perks from '../../screens/Perks/Perks';
import MyLoads from '../../screens/MyLoads/MyLoads';
import Offers from '../../screens/Offers/Offers';
import FindLoads from '../../screens/FindLoads/FindLoads';
import Home from '../../screens/Home/Home';

// The TabNavigator can (should) be given an array of routeNames to explicitly
// determine the order of the tabs.  If not given, the order *could* differ
// from what you intended based on the order of keys in the routes object.
export const orderedRouteNames = [
  'Home',
  'Offers',
  'FindLoads',
  'MyLoads',
  'Perks',
];

export const initialRouteName = 'Home';

const screensWithSubtabs = {
  Offers: true,
  MyLoads: true,
};

const screens = {
  Home,
  Offers,
  FindLoads,
  MyLoads,
  Perks,
};

export const routes = mapValues(screens, createTabStack);

function createTabStack(screen, routeName) {
  if (screensWithSubtabs[routeName]) {
    return screen;
  }
  const stackRoutes = {
    [routeName]: { screen },
  };
  return StackNavigator(stackRoutes, { headerMode: 'none' });
}
