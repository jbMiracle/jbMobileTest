import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import C360Header from './C360Header';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();

  const props = {
    showBackButton: false,
    backButtonOnPress: () => {},
    title: 'Back',
  };

  renderer.render(<C360Header { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders a header with the back button enabled', () => {
  const renderer = new ShallowRenderer();

  const props = {
    showBackButton: true,
    backButtonOnPress: () => {},
    title: 'Load Details',
  };

  renderer.render(<C360Header { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
