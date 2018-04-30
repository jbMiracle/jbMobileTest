import React, { Component } from 'react';
import { Image } from 'react-native';
import { Text, Button } from 'native-base';
import styles from './LoginBiometrics.style';
import localizedString from '../../../services/localization';
import { authenticate as biometricAuthenticate, BiometryTypes } from '../../../services/biometry';
import C360LogoContainer from '../../../components/C360LogoContainer/C360LogoContainer';

const fingerprintImage = require('../../../assets/images/fingerprint.png');
const faceImage = require('../../../assets/images/faceIdLogoLarge.png');

const BiometryImages = {
  [BiometryTypes.TouchID]: fingerprintImage,
  [BiometryTypes.FaceID]: faceImage,
};

const loginTextOptions = { scope: 'Login' };
const loginString = key => localizedString(key, loginTextOptions);

class LoginBiometrics extends Component {
  touchIdDialog() {
    biometricAuthenticate().then(result => this.props.authenticated(result));
  }

  renderButton(isSetup, labelKey) {
    if (!isSetup) {
      return (
        <Button
          testID='setup_touch_id'
          block
          large
          primaryDark
          onPress={ () => this.props.setupBiometricLogin() }
        >
          <Text>{loginString(labelKey)}</Text>
        </Button>
      );
    } else {
      this.touchIdDialog();
      return null;
    }
  }

  render() {
    const { isBiometricLoginSetup, supportedBiometryType } = this.props;
    return (
      <C360LogoContainer
        headerText={ loginString(`login_${supportedBiometryType}`) }
        descriptionText={ loginString(`login_${supportedBiometryType}_desc`) }
      >
        <Image style={ styles.biometricImage } source={ BiometryImages[supportedBiometryType] } />
        {this.renderButton(isBiometricLoginSetup, `setup_${supportedBiometryType}`)}
      </C360LogoContainer>
    );
  }
}

export default LoginBiometrics;
