export const locators = {
  login: {
    loginButton: 'login_loginButton',
    username: 'login_username',
    password: 'login_password',
    forgotPassword: 'forgetPassword',
    forgotPasswordInput: 'forgetPasswordInput',
    forgotPasswordInputCaps: 'EMAIL_ADDRESS',
    forgotPasswordRequestButton: 'forgotPassword_requestButton',
  },
  offers: {
    showOffer: '//XCUIElementTypeButton[@name=\'Show Offer Details\']',
    // inactiveOfferTab: '//XCUIElementTypeButton[@name=\'Inactive Offers\']',
    inactiveOfferTab: 'inactiveOffers',
    activeOfferTab: '//XCUIElementTypeButton[@name=\'Active Offers\']',
  },
  bottomNav: {
    home: 'bottomnav_Home',
    offers: 'bottomnav_Offers',
    findLoads: 'bottomnav_FindLoads',
    myLoads: 'bottomnav_MyLoads',
    perks: 'bottomnav_Perks',
  },
  header: {
    backButton: 'header_backButton',
    moreMenu: {
      icon: 'moreMenu',
      profile: 'moreMenu_profile',
      manageUsers: 'moreMenu_manageUsers',
      feedback: 'moreMenu_feedback',
      logOut: 'moreMenu_logout',
    },
    notificationMenu: {
      icon: 'notificationMenu',
    },
    myLoads: {
      acceptanceTab: 'acceptanceNeeded',
      driverAssignmentTab: 'driverAssignment',
      inTransitTab: '//XCUIElementTypeButton[@name=\'In Transit\']',
      completedTab: '//XCUIElementTypeButton[@name=\'Completed\']',
      inTransitShwLdButton: 'showLoadButton',
    },
  },
};
