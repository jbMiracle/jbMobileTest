import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import InTransit from '../InTransit/InTransit';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();
  const props = {
    navigation: {
      state: {
        params: {
          msg: 'test',
        },
      },
    },
  };
  renderer.render(<InTransit { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
