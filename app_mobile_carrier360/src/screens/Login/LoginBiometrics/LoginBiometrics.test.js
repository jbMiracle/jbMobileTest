import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LoginBiometrics from './LoginBiometrics';
import { BiometryTypes } from '../../../services/biometry';

it('can render a menu list component', () => {
  const renderer = new ShallowRenderer();

  const props = {
    isBiometricLoginSupported: true,
    supportedBiometryType: BiometryTypes.FaceID,
    isBiometricLoginSetup: false,
  };

  renderer.render(<LoginBiometrics { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
