import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import OfferDetails from '../OfferDetails/OfferDetails';

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

  renderer.render(<OfferDetails { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
