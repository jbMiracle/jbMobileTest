import { Platform } from 'react-native';

const setupBiometric = name =>
  `You need to setup ${name} on your device that you will use to log in to J.B. Hunt Carrier 360.`;

const TouchID = Platform.select({ ios: 'Touch ID', android: 'Fingerprint' });
const FaceID = 'Face ID';

export default {
  App: {
    genericError: 'Failed',
    genericOk: 'OK',
  },
  BottomNav: {
    find_loads: 'Find Loads',
    home: 'Home',
    my_loads: 'My Loads',
    offers: 'Offers',
    perks: 'Perks',
  },
  Login: {
    login_button: 'Log In',
    touch_id: `${TouchID}`,
    face_id: `${FaceID}`,
    setup_touch_id: `Setup ${TouchID}`,
    setup_face_id: `Setup ${FaceID}`,
    login_touch_id: `Login using ${TouchID}`,
    login_face_id: `Login using ${FaceID}`,
    login_touch_id_desc: setupBiometric(TouchID),
    login_face_id_desc: setupBiometric(FaceID),
    password: 'Password',
    track_load_as_guest: 'Track Load As Guest',
    forgotPassword_button: 'password',
    forgotPassword_text: 'Forgot your',
  },
  LoginPassword: {
    username: 'Username',
    password: 'Password',
    forgotPassword_1: 'Forgot your',
    forgotPassword_2: ' password',
    login_button: 'Log In',
    create_account_1: 'Don\'t have an account?',
    create_account_2: ' Create an Account Now',
  },
  ForgotPassword: {
    forgetBody: 'Please enter the email address associated to your account to request a password reset. Check that email account for further instructions.',
    forgetTitle: 'Forget your password?',
    inputPlaceholder: 'Email address',
    requestButton: 'Request',
    success: 'Email has been sent to the address provided',
    errors: {
      cannot_use_jbhunt_email: 'JB Hunt email cannot be used',
      user_not_found: 'A user with that ID was not found.',
    },
  },
  MoreMenu: {
    feedback: 'Feedback',
    manage_users: 'Manage Users',
    profile: 'Profile',
    sign_out: 'Sign Out',
  },
  PendingUserStates: {
    button: {
      back_to_login: 'Back to Login',
      become_a_carrier: 'Become a Carrier',
      call_carrier_relations: 'Call\nCarrier Relations',
      continue_to_profile: 'Continue to Profile',
      resend_email: 'Resend Email',
    },
    CarrierNotFound: {
      body1: 'We were unable to find your DOT/MC number in our system. If you would like to become a carrier for J.B. Hunt, please go to jbhuntcarriers.com to complete the registration packet. If you think you received this message in error, please call ',
      body2: ' or email',
    },
    CarrierPending: {
      body1: 'All functionality of J.B. Hunt 360 may not be available because your carrier is currently in a pending status. Please call ',
      body2: ' or email ',
      body3: ' to update your information.',
    },
    Rejected: {
      body1: 'Your administrator has not verified your account.\nFor more information, contact ',
      header: 'User security level not approved',
    },
    thank_you: 'Thank you!',
    UnverifiedUser: {
      body1: 'The information provided does not match the carrier profile we have on file. Please call ',
      body2: ' or email ',
      body3: ' to complete your carrier sign-up.',
    },
    WaitingOnAdminApproval: {
      body1: 'Your account is pending approval by {{carrierAdmin}}. Once approved, you will receive an email that your access has been granted. Need help? Email ',
    },
    WaitingOnEmailActivation: {
      body1: 'To gain access to all features, please check your email inbox for a verification email and link provided.  If you don\'t find the verification email in your Inbox, please check your Spam or Junk folder. To resend the email, please click resend. Need help? Email',
    },
  },
};

