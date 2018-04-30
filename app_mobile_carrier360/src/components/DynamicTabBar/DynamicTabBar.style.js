import { StyleSheet } from 'react-native';
import C360Colors from '../../themes/360Colors';

export default StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: C360Colors.Blue500,
  },
  tabStyle: {
    paddingHorizontal: 0,
  },
  labelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  indicatorStyle: {
    backgroundColor: '#FAD802',
    height: 4,
  },
});
