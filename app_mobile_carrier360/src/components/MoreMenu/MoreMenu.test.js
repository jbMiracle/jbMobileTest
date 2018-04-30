import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MoreMenu from './MoreMenu';

it('can render a menu list component', () => {
  const renderer = new ShallowRenderer();

  const props = {
    menuList: [
      { key: 'Profile', icon: 'notebook' },
      { key: 'Manage Users', icon: 'people' },
      { key: 'Feedback', icon: 'envelope' },
      { key: 'Sign Out', icon: 'logout' },
    ],
    style: {
      headerIcon: {},
      profileMenuView: '',
      mainText: '',
      subText: '',
      flexColumn: '',
      popoverProps: {},
      menuTriggerStyles: {},
    },
  };

  renderer.render(<MoreMenu { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
