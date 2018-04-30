import { all } from 'redux-saga/effects';
import { watchQueryBiometricSupport, watchSetupBiometricLogin } from './biometry.saga';
import { watchUserAuthenticated } from './login.saga';

export default function* authSaga() {
  yield all([
    watchQueryBiometricSupport(),
    watchSetupBiometricLogin(),
    watchUserAuthenticated(),
  ]);
}
