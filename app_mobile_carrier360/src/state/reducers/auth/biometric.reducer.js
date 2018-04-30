import { Auth as AuthActionTypes } from '../../types';

const initialState = {
  isSetup: false,
  isSupported: false,
  supportedType: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AuthActionTypes.BiometricSupportDetermined:
    case AuthActionTypes.BiometricLoginSetup:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
