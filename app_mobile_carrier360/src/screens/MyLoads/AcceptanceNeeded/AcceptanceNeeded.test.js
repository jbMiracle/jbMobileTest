import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import AcceptanceNeeded from '../AcceptanceNeeded/AcceptanceNeeded';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();

  renderer.render(<AcceptanceNeeded />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
