import { App as AppActionTypes } from '../../types';
import ForgotPasswordReducer from './forgotPassword.reducer';

describe('ForgotPassword Reducer', () => {
  it('can process an error ForgotPasswordDone action', () => {
    expect(ForgotPasswordReducer({}, {
      type: AppActionTypes.ForgotPasswordDone,
      payload: {
        success: false,
        errorMessage: 'Some message',
      },
    })).toEqual({
      forgotPasswordSuccess: false,
      forgotPasswordError: 'Some message',
    });
  });

  it('can process an success ForgotPasswordDone action', () => {
    expect(ForgotPasswordReducer({}, {
      type: AppActionTypes.ForgotPasswordDone,
      payload: {
        success: true,
        errorMessage: null,
      },
    })).toEqual({
      forgotPasswordSuccess: true,
      forgotPasswordError: null,
    });
  });
});
