import { createStore } from 'redux';
import deepFreeze from 'deep-freeze';
import * as _ from 'lodash';
import {
  userAccessLogout,
  userAccessLoginPayloadFetched,
} from '../../actions/userAccess/UserAccessActions';
import UserReducer, { getInitialState } from './UserReducer';
import successUserLoginPayload from '../../../fixtures/apiResponses/userLogin/success.json';
import failedUserLoginPayload from '../../../fixtures/apiResponses/userLogin/fail.json';

describe('UserReducer', () => {
  const defaultInitialState = getInitialState();
  deepFreeze(defaultInitialState);

  function getStateForAction(action, initialState = defaultInitialState) {
    const store = createStore(UserReducer, initialState);
    store.dispatch(action);
    return store.getState();
  }

  describe('user login events', () => {
    describe('handles successful user login payload', () => {
      const userLoggedIn = userAccessLoginPayloadFetched(successUserLoginPayload);
      const state = getStateForAction(userLoggedIn);

      it('stores the login status', () => {
        expect(state.loginStatus).toEqual('SUCCESS');
      });

      it('it stores the carrierStatus and securityLevel on the user.authorization', () => {
        const stateAuthorization = state.authorization;
        const { securityLevel, carrierStatus } = successUserLoginPayload.data;
        const expectedAuthorization = _.pick(stateAuthorization, ['securityLevel', 'carrierStatus']);
        expect(expectedAuthorization).toEqual({ securityLevel, carrierStatus });
      });
    });

    describe('handles failure login payload', () => {
      const userFailedLogin = userAccessLoginPayloadFetched(failedUserLoginPayload);
      const state = getStateForAction(userFailedLogin);

      it('stores the login status', () => {
        expect(state.loginStatus).toEqual('USER_HAS_NO_SCAC');
      });

      it('it stores the carrierStatus and securityLevel on the user.authorization', () => {
        const stateAuthorization = state.authorization;
        const expectedAuthorization = _.pick(stateAuthorization, ['securityLevel', 'carrierStatus']);
        expect(expectedAuthorization).toEqual({});
      });
    });
  });

  describe('user logout events', () => {
    describe('when user logs out', () => {
      it('resets to a default user state', () => {
        const loginAction = userAccessLoginPayloadFetched(successUserLoginPayload);
        const stateAfterLogin = getStateForAction(loginAction);

        const logoutAction = userAccessLogout();
        const state = getStateForAction(logoutAction, stateAfterLogin);

        expect(state).toEqual(defaultInitialState);
      });
    });
  });
});
