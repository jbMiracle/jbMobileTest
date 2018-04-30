import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Completed from '../Completed/Completed';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();

  renderer.render(<Completed />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
