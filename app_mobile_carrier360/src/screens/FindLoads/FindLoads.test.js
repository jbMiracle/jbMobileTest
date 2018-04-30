import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FindLoads from './FindLoads';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();

  renderer.render(<FindLoads />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
