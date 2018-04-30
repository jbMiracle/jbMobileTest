import { tabBarHeight, overallBarHeight } from '../C360TabBar/C360TabBar.style';

export default {
  tabItem: {
    alignItems: 'center',
    height: tabBarHeight,
    justifyContent: 'center',
    paddingTop: 2,
  },
  mainItem: {
    alignItems: 'center',
    height: overallBarHeight,
    justifyContent: 'flex-end',
    paddingBottom: 2,
  },
  tabTitle: {
    fontSize: 11,
    paddingTop: 5,
  },
  tabIcon: {
    paddingBottom: 5,
  },
  mainButton: {
    alignItems: 'center',
    backgroundColor: '#dedede',
    borderRadius: (tabBarHeight - 12) / 2,
    height: tabBarHeight - 12,
    justifyContent: 'center',
    marginTop: -1 * ((tabBarHeight - 12) / 2),
    paddingBottom: 2,
    width: tabBarHeight - 12,
  },
  mainButtonIcon: {
    color: 'white',
  },
};
