import { TouchableHighlight, Dimensions } from 'react-native';
import C360Colors from '../../themes/360Colors';

const popUpWidth = Dimensions.get('window').width;

export const styleDef = {
  header: {
    backgroundColor: C360Colors.Blue500,
    borderBottomWidth: 0,
    elevation: 0,
    alignItems: 'center',
  },
  backButtonStyle: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  headerLogoStyle: {
    marginLeft: 10,
  },
  profileAvatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 10,
  },
  headerIcon: { justifyContent: 'center' },
  profileMenuView: {
    borderBottomWidth: 1,
    borderBottomColor: C360Colors.Grey500,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 12,
    marginBottom: 2,
  },
  mainText: { color: C360Colors.Grey800 },
  subText: {
    color: C360Colors.Grey600,
    fontSize: 11,
  },
  notificationRow: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  notificationTextView: {
    flexDirection: 'column',
    paddingHorizontal: 12,
  },
  notificationHierarchy: {
    fontWeight: 'bold',
    color: C360Colors.Grey800,
  },
  moreNotificationTextStyle: {
    color: C360Colors.Blue500,
    fontWeight: 'bold',
    fontSize: 13,
  },
  moreNotificationButtonStyle: {
    padding: 15,
    paddingTop: 25,
  },
  itemSeparatorStyle: {
    backgroundColor: C360Colors.Grey500,
    height: 1,
    opacity: 0.4,
  },
  timeStamp: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 40,
  },
  badgeStyle: {
    backgroundColor: C360Colors.Yellow500,
    width: 10,
    height: 10,
  },
  flexColumn: { flexDirection: 'column' },
  alignFlexEnd: { alignItems: 'flex-end' },
  whiteText: { color: 'white' },
  alignCenter: { alignItems: 'center' },
  fontSize10: { fontSize: 10 },
  marginRight25: { marginRight: 25 },
  menuTriggerStyles: {
    triggerOuterWrapper: {
      marginRight: 10,
    },
    triggerText: { color: 'white' },
    triggerWrapper: {
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
    triggerTouchable: {
      underlayColor: 'transparent',
      activeOpacity: 0.6,
    },
    TriggerTouchableComponent: TouchableHighlight,
  },
  popoverProps: {
    preferredPlacement: 'bottom',
    placement: 'bottom',
  },
};

export const menuOptionsStyle = ({ type }) => ({
  optionsContainer: {
    backgroundColor: C360Colors.White,
    alignItems: 'center',
    borderRadius: 7,
    // marginTop: 12.5,
  },
  optionsWrapper: {
    backgroundColor: C360Colors.White,
    borderRadius: 7,
    width: type === 'notifications' ? (popUpWidth / 1.033) : (popUpWidth / 1.67),
    paddingHorizontal: type === 'notifications' ? 3 : 20,
    paddingVertical: 10,
  },
  optionWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  optionTouchable: {
    underlayColor: 'transparent',
    activeOpacity: 0.3,
  },
  optionText: {
    color: C360Colors.Grey800,
    fontSize: 12,
  },
});
