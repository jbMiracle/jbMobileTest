import variable from './../variables/platform';

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;
  const primaryCommon = {
    'NativeBase.Text': {
      color: variables.btnPrimaryColor,
      lineHeight: variables.btnLineHeightTight,
      textAlign: 'center',
    },
    'NativeBase.Icon': {
      color: variables.btnPrimaryColor,
    },
    'NativeBase.IconNB': {
      color: variables.btnPrimaryColor,
    },
  };
  const primaryDarkCommon = {
    'NativeBase.Text': {
      color: variables.btnPrimaryDarkColor,
      lineHeight: variables.btnLineHeightTight,
      textAlign: 'center',
    },
    'NativeBase.Icon': {
      color: variables.btnPrimaryDarkColor,
    },
    'NativeBase.IconNB': {
      color: variables.btnPrimaryDarkColor,
    },
  };
  const secondaryCommon = {
    'NativeBase.Text': {
      color: variables.btnSecondaryColor,
      lineHeight: variables.btnLineHeightTight,
      textAlign: 'center',
    },
    'NativeBase.Icon': {
      color: variables.btnSecondaryColor,
    },
    'NativeBase.IconNB': {
      color: variables.btnSecondaryColor,
    },
  };
  const secondaryDarkCommon = {
    'NativeBase.Text': {
      color: variables.btnSecondaryDarkColor,
      lineHeight: variables.btnLineHeightTight,
      textAlign: 'center',
    },
    'NativeBase.Icon': {
      color: variables.btnSecondaryDarkColor,
    },
    'NativeBase.IconNB': {
      color: variables.btnSecondaryDarkColor,
    },
  };
  const successCommon = {
    'NativeBase.Text': {
      color: variables.btnSuccessBg,
    },
    'NativeBase.Icon': {
      color: variables.btnSuccessBg,
    },
    'NativeBase.IconNB': {
      color: variables.btnSuccessBg,
    },
  };
  const infoCommon = {
    'NativeBase.Text': {
      color: variables.btnInfoBg,
    },
    'NativeBase.Icon': {
      color: variables.btnInfoBg,
    },
    'NativeBase.IconNB': {
      color: variables.btnInfoBg,
    },
  };
  const warningCommon = {
    'NativeBase.Text': {
      color: variables.btnWarningBg,
    },
    'NativeBase.Icon': {
      color: variables.btnWarningBg,
    },
    'NativeBase.IconNB': {
      color: variables.btnWarningBg,
    },
  };
  const dangerCommon = {
    'NativeBase.Text': {
      color: variables.btnDangerBg,
    },
    'NativeBase.Icon': {
      color: variables.btnDangerBg,
    },
    'NativeBase.IconNB': {
      color: variables.btnDangerBg,
    },
  };
  const buttonTheme = {
    '.disabled': {
      backgroundColor: variables.btnDisabledBg,
    },
    '.bordered': {
      '.primary': {
        ...primaryCommon,
        backgroundColor: 'transparent',
        borderColor: variables.btnPrimaryBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.success': {
        ...successCommon,
        backgroundColor: 'transparent',
        borderColor: variables.btnSuccessBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.info': {
        ...infoCommon,
        backgroundColor: 'transparent',
        borderColor: variables.btnInfoBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.warning': {
        ...warningCommon,
        backgroundColor: 'transparent',
        borderColor: variables.btnWarningBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.danger': {
        ...dangerCommon,
        backgroundColor: 'transparent',
        borderColor: variables.btnDangerBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.disabled': {
        backgroundColor: null,
        borderColor: variables.btnDisabledBg,
        borderWidth: variables.borderWidth * 2,
        'NativeBase.Text': {
          color: variables.btnDisabledBg,
        },
      },
      ...primaryCommon,
      borderWidth: variables.borderWidth * 2,
      elevation: null,
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
      backgroundColor: 'transparent',
    },

    '.primary': {
      ...primaryCommon,
      backgroundColor: variables.btnPrimaryBg,
      '.disabled': {
        backgroundColor: null,
        borderColor: variables.btnDisableColor,
        borderWidth: variables.borderWidth * 2,
        'NativeBase.Text': {
          color: variables.btnDisableColor,
        },
      },
    },

    '.primaryDark': {
      ...primaryDarkCommon,
      backgroundColor: variables.btnWarningBg,
      '.disabled': {
        backgroundColor: null,
        borderColor: variables.btnDisableColor,
        borderWidth: variables.borderWidth * 2,
        'NativeBase.Text': {
          color: variables.btnDisableColor,
        },
      },
    },

    '.secondary': {
      ...secondaryCommon,
      backgroundColor: variables.btnSecondaryBg,
      borderColor: variables.btnSecondaryColor,
      borderWidth: variables.borderWidth * 2,
      '.disabled': {
        backgroundColor: null,
        borderColor: variables.btnDisableColor,
        borderWidth: variables.borderWidth * 2,
        'NativeBase.Text': {
          color: variables.btnDisableColor,
        },
      },
    },

    '.secondaryDark': {
      ...secondaryDarkCommon,
      backgroundColor: variables.btnSecondaryDarkBg,
      borderColor: variables.btnWarningBg,
      borderWidth: variables.borderWidth * 2,
      '.disabled': {
        backgroundColor: null,
        borderColor: variables.btnDisableColor,
        borderWidth: variables.borderWidth * 2,
        'NativeBase.Text': {
          color: variables.btnDisableColor,
        },
      },
    },

    '.success': {
      '.bordered': {
        ...successCommon,
      },
      backgroundColor: variables.btnSuccessBg,
    },

    '.info': {
      '.bordered': {
        ...infoCommon,
      },
      backgroundColor: variables.btnInfoBg,
    },

    '.warning': {
      '.bordered': {
        ...warningCommon,
      },
      backgroundColor: variables.btnWarningBg,
    },

    '.danger': {
      '.bordered': {
        ...dangerCommon,
      },
      backgroundColor: variables.btnDangerBg,
    },

    '.block': {
      justifyContent: 'center',
      alignSelf: 'stretch',
    },

    '.full': {
      justifyContent: 'center',
      alignSelf: 'stretch',
      borderRadius: 0,
    },

    '.rounded': {
      // paddingHorizontal: variables.buttonPadding + 20,
      borderRadius: variables.borderRadiusLarge,
    },

    '.transparent': {
      backgroundColor: 'transparent',
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      ...primaryCommon,
      '.danger': {
        ...dangerCommon,
        backgroundColor: null,
      },
      '.warning': {
        ...warningCommon,
        backgroundColor: null,
      },
      '.info': {
        ...infoCommon,
        backgroundColor: null,
      },
      '.primary': {
        ...primaryCommon,
        backgroundColor: null,
      },
      '.success': {
        ...successCommon,
        backgroundColor: null,
      },
    },

    '.small': {
      height: 30,
      'NativeBase.Text': {
        fontSize: 14,
      },
    },

    '.large': {
      height: 48,
      'NativeBase.Text': {
        fontSize: 16,
        fontFamily: variables.titleFontfamily,
      },
    },

    '.capitalize': {},

    '.vertical': {
      flexDirection: 'column',
      height: null,
    },

    'NativeBase.Text': {
      fontFamily: variables.btnFontFamily,
      marginLeft: 0,
      marginRight: 0,
      color: variables.inverseTextColor,
      fontSize: variables.btnTextSize,
      lineHeight: variables.btnLineHeight,
      paddingHorizontal: 16,
      backgroundColor: 'transparent',
      // childPosition: 1
    },

    'NativeBase.Icon': {
      color: variables.inverseTextColor,
      fontSize: 24,
      marginHorizontal: 16,
      paddingTop: platform === 'ios' ? 2 : undefined,
    },
    'NativeBase.IconNB': {
      color: variables.inverseTextColor,
      fontSize: 24,
      marginHorizontal: 16,
      paddingTop: platform === 'ios' ? 2 : undefined,
    },

    '.iconLeft': {
      'NativeBase.Text': {
        marginLeft: 0,
      },
      'NativeBase.IconNB': {
        marginRight: 0,
        marginLeft: 16,
      },
      'NativeBase.Icon': {
        marginRight: 0,
        marginLeft: 16,
      },
    },
    '.iconRight': {
      'NativeBase.Text': {
        marginRight: 0,
      },
      'NativeBase.IconNB': {
        marginLeft: 0,
        marginRight: 16,
      },
      'NativeBase.Icon': {
        marginLeft: 0,
        marginRight: 16,
      },
    },
    '.picker': {
      'NativeBase.Text': {
        '.note': {
          fontSize: 16,
          lineHeight: null,
        },
      },
    },

    paddingVertical: variables.buttonPadding,
    // paddingHorizontal: variables.buttonPadding + 10,
    backgroundColor: variables.btnPrimaryBg,
    borderRadius: variables.borderRadiusBase,
    borderColor: variables.btnPrimaryBg,
    borderWidth: null,
    height: 45,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    elevation: 2,
    shadowColor: platformStyle === 'material' ? variables.brandDark : undefined,
    shadowOffset:
      platformStyle === 'material' ? { width: 0, height: 2 } : undefined,
    shadowOpacity: platformStyle === 'material' ? 0.2 : undefined,
    shadowRadius: platformStyle === 'material' ? 1.2 : undefined,
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  return buttonTheme;
};
