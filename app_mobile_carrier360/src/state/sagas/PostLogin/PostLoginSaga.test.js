import * as _ from 'lodash';
import SagaTester from 'redux-saga-tester';
import NavigationActions from 'react-navigation/src/NavigationActions';
import { UserAccess } from '../../types';
import PostLoginSaga from './PostLoginSaga';
import loginPendingMessages from '../../../navigators/auth/routes';

const testAuthorizationUser = {
  carrierPhoneNumber: '5309332784',
  carrierScac: '00MV',
  carrierStatus: 'APPROVED',
  carrierType: 'CARRIER',
  currentJobId: null,
  currentOrderAlphaCode: null,
  currentOrderNumber: null,
  currentOrderPlanNumber: null,
  internalUserId: 30060995,
  isImpersonator: false,
  isUserCarrierPCS: false,
  runtimeEnvironment: 'TEST',
  securityLevel: 'Pending_Activation',
  userEmail: 'CARROLJOEL@GMAIL.COM',
  userFirstName: 'CARROL',
  userId: 'JBHCAJ05',
  userLastName: 'JOEL',
  userPhoneNumber: '1234567890',
  userProfilePictureUrl: null,
  userThumbnailPictureUrl: null,
};

describe('PostLoginSaga', () => {
  it('Listens for USER_LOGIN/DONE event', async () => {
    const sagaTester = new SagaTester({ initialState: { user: { authorization: testAuthorizationUser } } });
    sagaTester.start(PostLoginSaga);

    sagaTester.dispatch({ type: UserAccess.LoginDone });
    await sagaTester.waitFor(UserAccess.PostLogin);
    expect(sagaTester.wasCalled(UserAccess.PostLogin));
  });

  it('Reads a user from the store after a user has logged in', async () => {
    const sagaTester = new SagaTester({ initialState: { user: { authorization: testAuthorizationUser } } });
    sagaTester.start(PostLoginSaga);

    sagaTester.dispatch({ type: UserAccess.LoginDone });
    await sagaTester.waitFor(UserAccess.PostLogin);
    const finalAction = sagaTester.getLatestCalledAction();
    expect(finalAction.payload).toEqual(testAuthorizationUser);
  });
});

describe('Generated tests for PostLoginSaga', () => {
  const asyncTestSaga = async (initialState, expectedRoute) => {
    const sagaTester = new SagaTester({ initialState });
    sagaTester.start(PostLoginSaga);
    sagaTester.dispatch({ type: UserAccess.LoginDone });
    await sagaTester.waitFor(UserAccess.PostLogin);

    const expectedAction = NavigationActions.navigate({ routeName: expectedRoute });
    expect(sagaTester.wasCalled(expectedAction.type)).toBe(true);

    const actions = sagaTester.getCalledActions();
    const navigationAction = _.find(actions, { type: expectedAction.type });
    expect(navigationAction.routeName).toBe(expectedAction.routeName);

    return sagaTester;
  };

  _.forEach(['Admin', 'Invoice', 'BookLoads', 'Driver'], (securityLevel) => {
    test(`grants full access to users that have Approved carrier status and a user access level of ${securityLevel}:`, async () => {
      const testUser = {
        ...testAuthorizationUser,
        securityLevel,
      };

      await asyncTestSaga({ user: { authorization: testUser } }, 'Main');
    });
  });

  _.forEach(['Approved', 'PendingUserStates', 'SafteyPending'], async (carrierStatus) => {
    test(`With userLevel of "Waiting for Email" and carrierStatus of ${carrierStatus}, route should be 'Waiting on email Activation`, async () => {
      const testUser = {
        ...testAuthorizationUser,
        carrierStatus,
        securityLevel: 'Pending_Activation',
      };

      await asyncTestSaga({ user: { authorization: testUser } }, loginPendingMessages.waitingOnEmailActivation);
    });
  });

  _.forEach(['Approved', 'PendingUserStates', 'SafetyPending'], async (carrierStatus) => {
    test(`With userLevel of "Waiting on Admin" and carrierStatus of ${carrierStatus}, route should be 'Waiting on admin approval'`, async () => {
      const testUser = {
        ...testAuthorizationUser,
        carrierStatus,
        securityLevel: 'PendingUserStates',
      };

      await asyncTestSaga({ user: { authorization: testUser } }, loginPendingMessages.waitingOnAdminApproval);
    });
  });

  _.forEach(['Approved', 'PendingUserStates', 'SafteyPending'], async (carrierStatus) => {
    test(`With userLevel of "Unverified" and carrierStatus of ${carrierStatus}, route should be to 'Unverified User'`, async () => {
      const testUser = {
        ...testAuthorizationUser,
        carrierStatus,
        securityLevel: 'Unverified',
      };

      await asyncTestSaga({ user: { authorization: testUser } }, loginPendingMessages.unverifiedUser);
    });
  });

  _.forEach([
    'Driver',
    'BookLoads',
    'InvoiceLoads',
    'Admin',
  ], async (securityLevel) => {
    test(`With a security level of ${securityLevel} and a carrierStatus of PENDING, user should get 'Carrier Pending - limited access' message`, async () => {
      const testUser = {
        ...testAuthorizationUser,
        carrierStatus: 'PENDING',
        securityLevel,
      };

      await asyncTestSaga({ user: { authorization: testUser } }, loginPendingMessages.carrierPending);
    });
  });

  _.forEach([
    'APPROVED',
    'REJECTED',
  ], async (carrierStatus) => {
    test(`With a security level of Rejected and a carrierStatus of ${carrierStatus}, user should get 'Rejected' message`, async () => {
      const testUser = {
        ...testAuthorizationUser,
        carrierStatus,
        securityLevel: 'Rejected',
      };

      await asyncTestSaga({ user: { authorization: testUser } }, loginPendingMessages.rejected);
    });
  });

  _.forEach([
    'Driver',
    'BookLoads',
    'InvoiceLoads',
    'Admin',
    'Rejected',
    'Unverified',
    'PendingUserStates',
    'Pending_Activation',
  ], async (securityLevel) => {
    test(`With a security level of ${securityLevel} and a loginStatus of "USER_HAS_NO_SCAC", go to "Carrier DOT not found in CMS" message`, async () => {
      const testUser = {
        ...testAuthorizationUser,
        carrierStatus: 'APPROVED',
        securityLevel: 'Rejected',
      };

      await asyncTestSaga(
        { user: { authorization: testUser, loginStatus: 'USER_HAS_NO_SCAC' } },
        loginPendingMessages.carrierDotNotFoundInCms
      );
    });
  });
});

