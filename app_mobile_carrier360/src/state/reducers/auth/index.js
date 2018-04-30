import { combineReducers } from 'redux';
import userStatusReducer from './user-status.reducer';
import biometricReducer from './biometric.reducer';

export default combineReducers({
  userStatus: userStatusReducer,
  biometric: biometricReducer,
});
