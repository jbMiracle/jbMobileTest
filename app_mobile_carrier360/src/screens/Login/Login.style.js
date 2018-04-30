import { StyleSheet } from 'react-native';
import C360Colors from '../../themes/360Colors';

export default {
  container: {
    alignItems: 'center',
    backgroundColor: C360Colors.Blue500,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  methodsContainer: {
    alignItems: 'flex-end',
    borderBottomColor: C360Colors.Blue600,
    borderBottomWidth: 12,
    flexDirection: 'row',
  },
  methodButton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  methodButtonView: {
    alignItems: 'center',
    flex: 1,
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  methodSeparator: {
    backgroundColor: C360Colors.White,
    height: 30,
    marginVertical: 15,
    width: StyleSheet.hairlineWidth,
  },
  methodText: {
    color: C360Colors.White,
    fontSize: 14,
    textAlign: 'center',
  },
  triStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: C360Colors.Blue600,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderLeftWidth: 12,
    borderRightColor: 'transparent',
    borderRightWidth: 12,
    borderStyle: 'solid',
    bottom: 0,
    height: 0,
    position: 'absolute',
    width: 0,
  },
};
