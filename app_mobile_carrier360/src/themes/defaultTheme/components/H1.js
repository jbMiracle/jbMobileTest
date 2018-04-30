import variable from './../variables/platform';

export default (variables = variable) => {
  const h1Theme = {
    color: variables.textColor,
    fontFamily: variables.headerFontFamily,
    fontSize: variables.fontSizeH1,
    lineHeight: variables.lineHeightH1,
  };

  return h1Theme;
};
