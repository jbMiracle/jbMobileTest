import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LoginPassword from './LoginPassword';

describe('Render Login with Password screen', () => {
  it('Render Login with Password screen', () => {
    const renderer = new ShallowRenderer();
    const props = {
      navigation: {
        navigate: () => {},
        state: {},
      },
    };
    renderer.render(<LoginPassword { ...props } />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
