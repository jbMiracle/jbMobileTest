import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Home from './Home';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();

  renderer.render(<Home />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
