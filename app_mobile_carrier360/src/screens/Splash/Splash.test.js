import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Splash from './Splash';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();

  const props = {
    navigation: {
      navigate: () => {},
    },
  };

  renderer.render(<Splash { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
