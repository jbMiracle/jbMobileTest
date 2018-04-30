import React from 'react';
import renderer from 'react-test-renderer';
import NBComponents from './NBComponents';
// const AnimatedProps = require('./nodes/AnimatedProps');
// const AnimatedProps = require('../../../../node_modules/react-native/Libraries/Animated/src/nodes/AnimatedProps');

describe('NativeBase Components', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NBComponents />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
