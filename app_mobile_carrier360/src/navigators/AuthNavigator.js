import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../screens/Login/Login';
import PendingUserStates from '../screens/PendingUserStates';
import LoginPendingMessages from './auth/routes';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';

const {
  carrierDotNotFoundInCms,
  carrierPending,
  rejected,
  unverifiedUser,
  waitingOnAdminApproval,
  waitingOnEmailActivation,
} = LoginPendingMessages;

const {
  CarrierDotNotFoundInCmsScreen,
  CarrierPendingScreen,
  RejectedScreen,
  UnverifiedUserScreen,
  WaitingOnAdminApprovalScreen,
  WaitingOnEmailActivationScreen,
} = PendingUserStates;

export const initialRouteName = 'Login';

export default StackNavigator(
  {
    Login,
    ForgotPassword,
    [carrierDotNotFoundInCms]: CarrierDotNotFoundInCmsScreen,
    [carrierPending]: CarrierPendingScreen,
    [rejected]: RejectedScreen,
    [unverifiedUser]: UnverifiedUserScreen,
    [waitingOnAdminApproval]: WaitingOnAdminApprovalScreen,
    [waitingOnEmailActivation]: WaitingOnEmailActivationScreen,
  },
  {
    headerMode: 'none',
    initialRouteName,
  }
);
