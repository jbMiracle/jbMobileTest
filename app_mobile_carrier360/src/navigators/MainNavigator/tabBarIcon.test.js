import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TabBarIcon from './tabBarIcon';
import { orderedRouteNames } from './routes';

const mockNav = {
  popToTop: () => {},
  navigate: () => {},
};

const testOnRouteName = (routeName) => {
  const navForRoute = {
    ...mockNav,
    state: { routeName },
  };

  it(`should render the tab bar icon for ${routeName} focused`, () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TabBarIcon navigation={ navForRoute } focused />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it(`should render the tab bar icon for ${routeName} unfocused`, () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TabBarIcon navigation={ navForRoute } focused={ false } />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
};

describe('MainNav tabBarIcon component', () => {
  orderedRouteNames.forEach(testOnRouteName);
});
