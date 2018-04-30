import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import C360LogoContainer from './C360LogoContainer';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();
  const props = {
    navigation: {
      navigate: () => {},
    },
  };

  renderer.render(<C360LogoContainer { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders the back button on the screen', () => {
  const renderer = new ShallowRenderer();

  const props = {
    showBackButton: true,
    backButtonOnPress: () => {},
  };

  renderer.render(<C360LogoContainer { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('can render an empty header without back button', () => {
  const renderer = new ShallowRenderer();

  const props = {
    showBackButton: false,
  };

  renderer.render(<C360LogoContainer { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('can render text with headerText', () => {
  const renderer = new ShallowRenderer();

  const props = {
    headerText: 'Thank you!',
  };

  renderer.render(<C360LogoContainer { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

