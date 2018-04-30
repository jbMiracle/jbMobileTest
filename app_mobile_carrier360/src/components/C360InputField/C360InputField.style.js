import variable from '../../themes/defaultTheme/variables/platform';
import C360Colors from '../../themes/360Colors';

export default {
  errorIcon: {
    name: 'jbh-Circle_Warning',
    style: { color: C360Colors.Red700 },
  },
  animatedView: {
    position: 'absolute',
  },
  title: {
    fontSize: 10,
    fontFamily: variable.headerFontFamily,
  },
  placeHolder: {
    fontSize: 16,
    fontFamily: variable.fontFamily,
  },
  body: {
    flex: 1,
  },
  leftMargin: {
    marginLeft: 12,
  },
  rightMargin: {
    marginRight: 12,
  },
  leftAlign: {
    marginLeft: 0,
  },
  rightAlign: {
    marginRight: 0,
  },
  blueFont: {
    color: C360Colors.Blue500,
  },
  greyFont: {
    color: C360Colors.Grey600,
  },
  whiteFont: {
    color: C360Colors.White,
  },
};
