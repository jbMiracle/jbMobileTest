import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import InactiveOffers from '../InactiveOffers/InactiveOffers';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();

  renderer.render(<InactiveOffers />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
