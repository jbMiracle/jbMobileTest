import { Platform } from 'react-native';
import variable from './../variables/platform';
import C360Colors from '../../../themes/360Colors';

export default (variables = variable) => ({
  '.dark': {
    'NativeBase.Input': {
      color: C360Colors.White,
    },
    'NativeBase.Text': {
      color: C360Colors.White,
    },
    'NativeBase.IconNB': {
      color: C360Colors.White,
    },
    borderColor: C360Colors.White,
  },
  'NativeBase.Input': {
    color: C360Colors.Black,
    fontSize: variables.DefaultFontSize,
  },
  'NativeBase.Text': {
    color: C360Colors.Grey600,
    fontSize: variables.DefaultFontSize,
  },
  'NativeBase.IconNB': {
    color: C360Colors.Grey600,
    alignSelf: 'center',
    fontSize: variables.DefaultFontSize,
  },
  '.error': {
    borderColor: C360Colors.Red700,
  },
  borderColor: C360Colors.Grey600,
  borderBottomWidth: 2,
  flexDirection: 'row',
  width: '100%',
  paddingBottom: 8,
  paddingTop: 12,
  marginTop: Platform.OS === 'ios' ? 20 : 12,
});
