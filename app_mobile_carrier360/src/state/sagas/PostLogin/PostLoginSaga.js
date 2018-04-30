import { put, all, takeEvery, select } from 'redux-saga/effects';
import NavigationActions from 'react-navigation/src/NavigationActions';
import { UserAccess } from '../../types';
import { UserAccess as UserAccessActions } from '../../actions';
import GetUser from '../../selectors/GetUser';
import loginPendingMessages from '../../../navigators/auth/routes';

const approvedSecurityLevels = [
  'Admin',
  'BookLoads',
  'Driver',
  'Invoice',
];

export default function* PostLoginSaga() {
  yield takeEvery(UserAccess.LoginDone, handleUserLogin);
}

export function* handleUserLogin() {
  const user = yield select(GetUser);
  yield all([
    put(navigateByUserStatus(user)),
    put(UserAccessActions.handleUserLoginCompleted(user)),
  ]);
}

function navigate(name) {
  return NavigationActions.navigate({ routeName: name });
}

function userHasFullAccess(userObject, approvedLevels = approvedSecurityLevels) {
  const user = userObject.authorization;
  return user.carrierStatus === 'APPROVED' && approvedLevels.includes(user.securityLevel);
}

/* TODO: Account for all error statuses */
function loginStatusError(user) {
  return user.loginStatus === 'USER_HAS_NO_SCAC';
}

function carrierStatusPending(carrierStatus) {
  return carrierStatus === 'PENDING';
}

function navigateByUserStatus(user, pendingMessages = loginPendingMessages) {
  const { securityLevel, carrierStatus } = user.authorization;
  const {
    carrierDotNotFoundInCms,
    carrierPending,
    rejected,
    unverifiedUser,
    waitingOnAdminApproval,
    waitingOnEmailActivation,
  } = pendingMessages;

  if (userHasFullAccess(user)) {
    return navigate('Main');
  }

  if (loginStatusError(user)) {
    return navigate(carrierDotNotFoundInCms);
  }

  if (carrierStatusPending(carrierStatus)) {
    return navigate(carrierPending);
  }

  switch (securityLevel) {
    case 'PendingUserStates':
      return navigate(waitingOnAdminApproval);
    case 'Unverified':
      return navigate(unverifiedUser);
    case 'Pending_Activation':
      return navigate(waitingOnEmailActivation);
    default:
      return navigate(rejected);
  }
}
