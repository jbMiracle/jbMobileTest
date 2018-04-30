import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ActiveOffers from '../ActiveOffers/ActiveOffers';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();

  renderer.render(<ActiveOffers />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
