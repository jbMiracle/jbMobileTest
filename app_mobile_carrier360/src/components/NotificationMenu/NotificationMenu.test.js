import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import NotificationMenu from './NotificationMenu';

it('can render a navigation menu component with a view more button', () => {
  const renderer = new ShallowRenderer();

  const props = {
    notifications: [
      { key: 'Load HV51606 - Status Update', status: 'You have been outbid', time: '2m' },
      { key: 'Favorite Lanes - Available Load', status: 'Dallas, TX, 73019 - San Antonio, TX, 78719', time: '23m' },
      { key: 'Manage Users - Approval Needed', status: 'New User Paul', time: '2d' },
      { key: 'Load HV51607 - Status Update', status: 'You have been outbid', time: '2m' },
      { key: 'Load HV51608 - Status Update', status: 'You have been served', time: '5m' },
    ],
    style: {
      headerIcon: {},
    },
    popoverProps: {},
    menuOptionsStyle: {},
  };

  renderer.render(<NotificationMenu { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('can render a navigation menu component without a view more button', () => {
  const renderer = new ShallowRenderer();

  const props = {
    notifications: [
      { key: 'Load HV51606 - Status Update', status: 'You have been outbid', time: '2m' },
      { key: 'Favorite Lanes - Available Load', status: 'Dallas, TX, 73019 - San Antonio, TX, 78719', time: '23m' },
    ],
    style: {
      headerIcon: {},
    },
    popoverProps: {},
    menuOptionsStyle: {},
  };

  renderer.render(<NotificationMenu { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
