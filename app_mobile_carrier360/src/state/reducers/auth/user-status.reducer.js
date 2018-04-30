import { Auth as AuthActionTypes } from '../../types';

const initialState = { isAuthenticated: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.UserAuthenticated:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
