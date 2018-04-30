import color from 'color';
import { Platform, Dimensions, PixelRatio } from 'react-native';
import C360Colors from '../../360Colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
  platform === 'ios' && deviceHeight === 812 && deviceWidth === 375;

export default {
  platformStyle,
  platform,

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg: C360Colors.Red500,
  badgeColor: C360Colors.White,
  badgePadding: platform === 'ios' ? 3 : 0,

  // Button
  btnFontFamily: 'ProximaNova-Regular',
  btnDisabledBg: C360Colors.Grey600,
  btnDisableColor: C360Colors.Blue600,
  buttonPadding: 6,
  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnSecondaryBg() {
    return this.brandSecondary;
  },
  get btnSecondaryColor() {
    return this.brandPrimary;
  },
  get btnPrimaryDarkColor() {
    return this.textColor;
  },
  get btnSecondaryDarkColor() {
    return this.inverseTextColor;
  },
  get btnSecondaryDarkBg() {
    return this.brandPrimary;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return platform === 'ios' ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: C360Colors.White,
  cardBorderColor: C360Colors.Green500,

  // CheckBox
  CheckboxRadius: platform === 'ios' ? 13 : 0,
  CheckboxBorderWidth: platform === 'ios' ? 1 : 2,
  CheckboxPaddingLeft: platform === 'ios' ? 4 : 2,
  CheckboxPaddingBottom: platform === 'ios' ? 0 : 5,
  CheckboxIconSize: platform === 'ios' ? 21 : 16,
  CheckboxIconMarginTop: platform === 'ios' ? undefined : 1,
  CheckboxFontSize: platform === 'ios' ? 23 / 0.9 : 17,
  DefaultFontSize: 17,
  checkboxBgColor: C360Colors.Blue500,
  checkboxSize: 20,
  checkboxTickColor: C360Colors.White,

  // Color
  brandPrimary: C360Colors.Blue500,
  brandSecondary: C360Colors.White,
  brandInfo: '#62B1F6',
  brandSuccess: C360Colors.Green500,
  brandDanger: C360Colors.Red500,
  brandWarning: C360Colors.Yellow500,
  brandDark: C360Colors.Black,

  // Font
  fontFamily: 'ProximaNova-Regular',
  fontSizeBase: 12,
  headerFontFamily: 'ProximaNova-Bold',
  fontSizeH1: 20,
  fontSizeH2: 16,
  fontSizeH3: 14,

  // Footer
  footerHeight: isIphoneX ? 89 : 55,
  footerDefaultBg: platform === 'ios' ? '#F8F8F8' : '#3F51B5',
  footerPaddingBottom: isIphoneX ? 34 : 0,

  // FooterTab
  tabBarTextColor: platform === 'ios' ? '#6b6b6b' : '#b3c7f9',
  tabBarTextSize: platform === 'ios' ? 14 : 11,
  activeTab: platform === 'ios' ? C360Colors.Blue500 : C360Colors.White,
  sTabBarActiveTextColor: C360Colors.Blue500,
  tabBarActiveTextColor: platform === 'ios' ? C360Colors.Blue500 : C360Colors.White,
  tabActiveBgColor: platform === 'ios' ? '#cde1f9' : '#3F51B5',

  // Header
  toolbarBtnColor: platform === 'ios' ? C360Colors.Blue500 : C360Colors.White,
  toolbarDefaultBg: platform === 'ios' ? '#F8F8F8' : '#3F51B5',
  toolbarHeight: platform === 'ios' ? (isIphoneX ? 88 : 64) : 56,
  toolbarSearchIconSize: platform === 'ios' ? 20 : 23,
  toolbarInputColor: platform === 'ios' ? '#CECDD2' : C360Colors.White,
  searchBarHeight: platform === 'ios' ? 30 : 40,
  searchBarInputHeight: platform === 'ios' ? 30 : 50,
  toolbarBtnTextColor: platform === 'ios' ? C360Colors.Blue500 : C360Colors.White,
  toolbarDefaultBorder: platform === 'ios' ? '#a7a6ab' : '#3F51B5',
  iosStatusbar: 'light-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: platform === 'ios' ? 30 : 28,
  iconHeaderSize: platform === 'ios' ? 33 : 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: C360Colors.Grey600,
  inputSuccessBorderColor: C360Colors.Green500,
  inputErrorBorderColor: C360Colors.Red500,
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return C360Colors.Grey800;
  },

  // Line Height
  btnLineHeight: 19,
  btnLineHeightTight: 16,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: platform === 'ios' ? 20 : 24,

  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: platform === 'ios' ? 10 : 12,
  listNoteColor: '#808080',
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: C360Colors.Red500,
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: platform === 'ios' ? 25 : 23,
  radioSelectedColorAndroid: C360Colors.Blue500,
  radioBtnLineHeight: platform === 'ios' ? 29 : 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: platform === 'ios' ? '#F8F8F8' : '#3F51B5',
  segmentActiveBackgroundColor: platform === 'ios' ? C360Colors.Blue500 : C360Colors.White,
  segmentTextColor: platform === 'ios' ? C360Colors.Blue500 : C360Colors.White,
  segmentActiveTextColor: platform === 'ios' ? C360Colors.White : '#3F51B5',
  segmentBorderColor: platform === 'ios' ? C360Colors.Blue500 : C360Colors.White,
  segmentBorderColorMain: platform === 'ios' ? '#a7a6ab' : '#3F51B5',

  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  // Tab
  tabDefaultBg: platform === 'ios' ? '#F8F8F8' : '#3F51B5',
  topTabBarTextColor: platform === 'ios' ? '#6b6b6b' : '#b3c7f9',
  topTabBarActiveTextColor: platform === 'ios' ? C360Colors.Blue500 : C360Colors.White,
  topTabBarBorderColor: platform === 'ios' ? '#a7a6ab' : C360Colors.White,
  topTabBarActiveBorderColor: platform === 'ios' ? C360Colors.Blue500 : C360Colors.White,

  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,

  // Text
  textColor: C360Colors.Black,
  inverseTextColor: C360Colors.White,
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: 'ProximaNova-Semibold',
  subtitleFontFamily: 'ProximaNova-Light',
  titleFontSize: platform === 'ios' ? 17 : 19,
  subTitleFontSize: platform === 'ios' ? 12 : 14,
  subtitleColor: platform === 'ios' ? '#8e8e93' : C360Colors.White,
  titleFontColor: platform === 'ios' ? C360Colors.Black : C360Colors.White,

  // Other
  borderRadiusBase: platform === 'ios' ? 5 : 2,
  borderWidth: 1,
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,
};
