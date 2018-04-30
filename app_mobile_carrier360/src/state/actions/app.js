import { App as AppActionTypes } from '../types';

export const genesis = () => ({
  type: AppActionTypes.Genesis,
});

export const forgotPassword = email => ({
  type: AppActionTypes.ForgotPassword,
  payload: email,
});

export const forgotPasswordServiceDone = (success, errorMessage) => ({
  type: AppActionTypes.ForgotPasswordDone,
  payload: {
    success,
    errorMessage,
  },
});
