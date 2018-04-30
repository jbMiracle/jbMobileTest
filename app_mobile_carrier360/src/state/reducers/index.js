import { combineReducers } from 'redux';
import NavigationReducer from './navigation';
import ForgotPasswordReducer from './forgotPassword/forgotPassword.reducer';
import UserReducer from './user/UserReducer';
import ScreensReducer from './screens';
import AuthReducer from './auth';

const rootReducer = combineReducers({
  nav: NavigationReducer,
  auth: AuthReducer,
  forgotPassword: ForgotPasswordReducer,
  user: UserReducer,
  screens: ScreensReducer,
});

export default rootReducer;
