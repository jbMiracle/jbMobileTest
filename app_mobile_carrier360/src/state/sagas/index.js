import { all } from 'redux-saga/effects';
import genesisSaga from './genesis';
import authSaga from './auth';
import forgotPasswordSaga from './forgotPassword';
import PostLoginSaga from './PostLogin/PostLoginSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    genesisSaga(),
    forgotPasswordSaga(),
    PostLoginSaga(),
  ]);
}
