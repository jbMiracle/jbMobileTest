import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LoadDetails from '../LoadDetails/LoadDetails';

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
  renderer.render(<LoadDetails { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
