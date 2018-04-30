import { Platform } from 'react-native';
import C360Colors from '../../themes/360Colors';

export const tabBarHeight = 60;
export const overallBarHeight = Platform.OS === 'ios' ? 60 : 76;

export const styleDef = {
  outerContainer: {
    height: tabBarHeight,
  },
  bar: {
    backgroundColor: C360Colors.White,
    height: tabBarHeight,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
  topBar: {
    backgroundColor: C360Colors.White,
    height: tabBarHeight,
    top: 1,
    width: '100%',
    position: 'absolute',
  },
  topAndroidBar: {
    backgroundColor: C360Colors.White,
    height: tabBarHeight,
    bottom: -1,
    width: '100%',
    position: 'absolute',
  },
  mainButtonHump: {
    alignSelf: 'center',
    backgroundColor: C360Colors.White,
    height: tabBarHeight,
    width: tabBarHeight + 3,
    marginTop: -20,
    borderRadius: tabBarHeight / 2,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    position: 'absolute',
  },
  mainButtonHumpAndroid: {
    alignSelf: 'center',
    backgroundColor: C360Colors.White,
    height: tabBarHeight,
    width: tabBarHeight + 3,
    bottom: 16,
    borderRadius: tabBarHeight / 2,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    position: 'absolute',
  },
  contents: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    height: overallBarHeight,
  },
  safeView: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    height: overallBarHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginTop: overallBarHeight,
  },
  safeViewIos: {
    backgroundColor: C360Colors.White,
  },
  col: {
    justifyContent: 'flex-end',
  },
};
