// import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Auth as AuthActionTypes } from '../../types';
import { Auth as AuthActions } from '../../actions';
import { queryBiometricSupport } from '../../../services/biometry';

export function* watchQueryBiometricSupport() {
  yield takeLatest(AuthActionTypes.QueryBiometricSupport, queryBiometricSupportSaga);
}

export function* watchSetupBiometricLogin() {
  yield takeLatest(AuthActionTypes.SetupBiometricLogin, setupBiometricLoginSaga);
}

export function* queryBiometricSupportSaga() {
  const result = yield call(queryBiometricSupport);
  yield put(AuthActions.biometricSupportDetermined(result));
}

export function* setupBiometricLoginSaga() {
  // yield delay(1000); // TODO: what goes on here?  Put in the password to verify?
  yield put(AuthActions.biometricLoginSetup(true));
}
