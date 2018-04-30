import { UserAccess } from '../../types';

export function userAccessLoginPayloadFetched(response) {
  return {
    type: UserAccess.LoginPayloadFetched,
    payload: response,
  };
}

export function userAccessLogout() {
  return {
    type: UserAccess.LogoutStart,
  };
}

export function handleUserLoginCompleted(user) {
  return {
    type: UserAccess.PostLogin,
    payload: user.authorization,
  };
}

