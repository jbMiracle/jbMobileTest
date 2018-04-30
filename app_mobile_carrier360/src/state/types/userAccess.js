const ActionNamespace = 'USER_ACCESS';

const UserAccess = {
  LoginStart: `${ActionNamespace}/LOGIN/START`,
  LoginPayloadFetched: `${ActionNamespace}/LOGIN/PAYLOAD_FETCHED`,
  LoginDone: `${ActionNamespace}/LOGIN/DONE`,
  PostLogin: `${ActionNamespace}/SAGA/POST_LOGIN/DONE`,
  LogoutStart: `${ActionNamespace}/LOGOUT/START`,
  LogoutDone: `${ActionNamespace}/LOGOUT/DONE`,
};

export default UserAccess;
