import { Auth as AuthActionTypes } from '../types';

export const userAuthenticated = (result = true) => ({
  type: AuthActionTypes.UserAuthenticated,
  payload: result,
});

export const queryBiometricSupport = () => ({
  type: AuthActionTypes.QueryBiometricSupport,
});

export const biometricSupportDetermined = supportResult => ({
  type: AuthActionTypes.BiometricSupportDetermined,
  payload: supportResult,
});

export const setupBiometricLogin = () => ({
  type: AuthActionTypes.SetupBiometricLogin,
});

export const biometricLoginSetup = (isSetup = true) => ({
  type: AuthActionTypes.BiometricLoginSetup,
  payload: { isSetup },
});
