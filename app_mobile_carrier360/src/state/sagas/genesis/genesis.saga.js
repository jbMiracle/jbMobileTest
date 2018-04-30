import { NativeModules } from 'react-native';
import { delay } from 'redux-saga';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import Config from 'react-native-config';
import { App as AppActionTypes } from '../../types';
import reduxManager from '../../redux';
import { queryBiometricSupportSaga } from '../auth/biometry.saga';

const { RNDynatrace } = NativeModules;

export default function* genesisSaga() {
  yield takeEvery(AppActionTypes.Genesis, genesis);
}

function* genesis() {
  // Temporarily delaying this, so the splash screen doesn't flash
  const interval = __DEV__ ? 500 : 1000;
  yield all([
    call(delay, interval),
    call(rehydrateStore),
    call(initDynatrace),
    call(queryBiometricSupportSaga),
  ]);
  yield put(NavigationActions.navigate({ routeName: 'Auth' }));
}

function rehydrateStore() {
  return reduxManager.rehydrateStoreAsync();
}

function initDynatrace() {
  const { DYNATRACE_APPID, DYNATRACE_ENVID, DYNATRACE_URL } = Config;

  return RNDynatrace.startup(DYNATRACE_APPID, DYNATRACE_ENVID, DYNATRACE_URL);
}
