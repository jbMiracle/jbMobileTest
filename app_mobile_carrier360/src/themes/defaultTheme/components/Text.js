import variable from './../variables/platform';

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize - 2,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    '.note': {
      color: '#a7a7a7',
      fontSize: variables.noteFontSize,
    },
  };

  return textTheme;
};
