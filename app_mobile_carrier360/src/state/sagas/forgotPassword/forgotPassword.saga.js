import { call, takeEvery, put } from 'redux-saga/effects';
import { App as AppActionTypes } from '../../types';
import { App as AppActions } from '../../actions';
import sendForgotPassword from '../../../services/forgotPassword';
import strings from '../../../services/localization/localization.service';

export default function* forgotPasswordSaga() {
  yield takeEvery(AppActionTypes.ForgotPassword, forgotPassword);
}

function* forgotPassword(action) {
  try {
    const result = yield call(sendForgotPassword, action.payload);
    if (result) {
      yield put(AppActions.forgotPasswordServiceDone(true, null));
    } else {
      yield put(AppActions.forgotPasswordServiceDone(false, strings('App.genericError')));
    }
  } catch (e) {
    yield put(AppActions.forgotPasswordServiceDone(false, e.message));
  }
}
