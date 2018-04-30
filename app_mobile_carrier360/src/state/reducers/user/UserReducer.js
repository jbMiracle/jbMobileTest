import { UserAccess } from '../../types';

export const getInitialState = () => ({
  authentication: {},
  authorization: {},
  profile: {},
  loginStatus: null,
});

export default function (state = getInitialState(), action) {
  switch (action.type) {
    case UserAccess.LoginPayloadFetched:
      return {
        ...state,
        authorization: {
          ...state.authorization,
          ...action.payload.data,
        },
        loginStatus: action.payload.status,
      };
    case UserAccess.LogoutStart:
      return getInitialState();
    default:
      return state;
  }
}
