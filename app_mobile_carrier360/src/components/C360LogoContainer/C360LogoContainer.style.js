import C360Colors from '../../themes/360Colors';
import variables from '../../themes/defaultTheme/variables/platform';

export default {
  containerStyles: {
    alignItems: 'center',
    backgroundColor: C360Colors.Blue500,
  },
  headerStyles: {
    backgroundColor: C360Colors.Blue500,
    borderBottomWidth: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  headerTextStyles: {
    color: C360Colors.White,
    textAlign: 'center',
  },
  descriptionTextStyles: {
    color: C360Colors.White,
    marginTop: 10,
    textAlign: 'center',
  },
  imageStyles: {
    marginBottom: 30,
  },
  iconStyles: {
    color: C360Colors.White,
  },
  blueBackgroundColor: {
    backgroundColor: C360Colors.Blue500,
  },
  topPadding: {
    paddingTop: variables.toolbarHeight,
  },
  horizontalPadding: {
    paddingHorizontal: 30,
  },
  fillWidth: {
    width: '100%',
  },
};
