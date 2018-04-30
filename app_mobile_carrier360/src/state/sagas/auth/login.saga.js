import { put, takeLatest } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { Auth as AuthActionTypes } from '../../types';

export function* watchUserAuthenticated() {
  yield takeLatest(AuthActionTypes.UserAuthenticated, userAuthenticatedSaga);
}

export function* userAuthenticatedSaga(action) {
  console.info(action);
  if (action.payload === true) {
    yield put(NavigationActions.navigate({ routeName: 'Main' }));
  }
}
