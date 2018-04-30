import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Login from './Login';
import { BiometryTypes } from '../../services/biometry';

it('can render an empty component', () => {
  const renderer = new ShallowRenderer();
  const state = {
    auth: {
      biometric: {
        isSupported: true,
        supportedType: BiometryTypes.FaceID,
        isSetup: false,
      },
    },
  };
  const props = {
    store: {
      getState: () => state,
      subscribe: () => {},
      dispatch: () => {},
    },
    isBiometricLoginSupported: true,
    supportedBiometryType: BiometryTypes.FaceID,
    isBiometricLoginSetup: false,
  };

  renderer.render(<Login { ...props } />);

  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
