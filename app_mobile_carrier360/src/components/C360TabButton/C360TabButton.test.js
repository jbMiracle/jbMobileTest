import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import C360TabButton from './C360TabButton';

it('can render tab button', () => {
  const renderer = new ShallowRenderer();
  const Grey700 = '#292929';
  const Grey400 = '#757575';
  const White = '#fff';
  const props = {
    id: 'buttondId',
    main: false,
    title: 'Example',
    onPress: () => {},
    tintColor: Grey400,
    backgroundColor: White,
    indicator: Grey700,
    mainIconColor: Grey400,
    navigation: {},
  };
  renderer.render(<C360TabButton { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
