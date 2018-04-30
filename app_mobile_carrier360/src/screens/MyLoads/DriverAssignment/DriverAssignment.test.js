import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import DriverAssignment from '../DriverAssignment/DriverAssignment';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();

  renderer.render(<DriverAssignment />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
