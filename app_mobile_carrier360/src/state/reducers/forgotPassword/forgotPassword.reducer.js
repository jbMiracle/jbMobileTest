import { App as AppActionTypes } from '../../types';

const ForgotPasswordReducer = (state = { forgotPasswordSuccess: false, forgotPasswordError: null }, action) => {
  switch (action.type) {
    case AppActionTypes.ForgotPasswordDone:
      return {
        ...state,
        forgotPasswordSuccess: action.payload.success,
        forgotPasswordError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default ForgotPasswordReducer;
