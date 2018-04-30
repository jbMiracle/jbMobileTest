import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Perks from './Perks';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();

  renderer.render(<Perks />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
