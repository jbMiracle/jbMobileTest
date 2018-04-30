import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import C360TabBar from './C360TabBar';

it('can render tab bar', () => {
  const renderer = new ShallowRenderer();
  const props = {
    navigation: {
      state: {
        routes: {
          map: () => {},
        },
        index: 1,
      },
      navigate: () => {},
      getParam: () => {},
    },
    renderIcon: () => {},
  };
  renderer.render(<C360TabBar { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
