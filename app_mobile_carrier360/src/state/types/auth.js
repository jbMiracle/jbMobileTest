const ActionNamespace = 'Auth';

export const QueryBiometricSupport = `${ActionNamespace}/QUERY_BIOMETRIC_SUPPORT`;
export const BiometricSupportDetermined = `${ActionNamespace}/BIOMETRIC_SUPPORT_DETERMINED`;
export const SetupBiometricLogin = `${ActionNamespace}/SETUP_BIOMETRIC_LOGIN`;
export const BiometricLoginSetup = `${ActionNamespace}/BIOMETRIC_LOGIN_SETUP`;
// export const InitialLogin = `${ActionNamespace}/INITIAL_LOGIN`; TODO: Maybe use this for any Initial Login actions??

export const LoginRequested = `${ActionNamespace}/LOGIN_REQUESTED`;
export const LoginRejected = `${ActionNamespace}/LOGIN_REJECTED`;
export const LoginAccepted = `${ActionNamespace}/LOGIN_ACCEPTED`;
export const UserAuthenticated = `${ActionNamespace}/USER_AUTHENTICATED`;
export const Logout = `${ActionNamespace}/LOGOUT`;
