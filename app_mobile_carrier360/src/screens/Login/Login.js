import React, { Component, Fragment } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { connectStyle, Text } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styleDef from './Login.style';
import LoginBiometrics from './LoginBiometrics/LoginBiometrics';
import localizedString from '../../services/localization';
import { Auth as AuthActions } from '../../state/actions';
import LoginPassword from './LoginPassword/LoginPassword';

const loginTextOptions = { scope: 'Login' };
const loginString = key => localizedString(key, loginTextOptions);

const LoginMethods = {
  Password: 'password',
  Biometric: 'biometric',
  Guest: 'track_load_as_guest',
};

const mapStateToProps = (state) => {
  const { isSupported, supportedType, isSetup } = state.auth.biometric;
  return {
    isBiometricLoginSupported: isSupported,
    supportedBiometryType: supportedType,
    isBiometricLoginSetup: isSetup,
  };
};
const mapDispatchToProps = dispatch => ({
  authenticated: result => dispatch(AuthActions.userAuthenticated(result)),
  setupBiometricLogin: () => dispatch(AuthActions.setupBiometricLogin()),
});

class Login extends Component {
  state = {
    selectedMethod: LoginMethods.Password,
  };

  componentWillMount() {
    const { isBiometricLoginSetup } = this.props;
    this.setState({
      selectedMethod: isBiometricLoginSetup ? LoginMethods.Biometric : LoginMethods.Password,
    });
  }

  onMethodSelected = method => () => this.setState({ selectedMethod: method });

  renderMethodSelector(method, labelKey = method) {
    const isSelected = this.state.selectedMethod === method;
    const fontStyle = { fontWeight: isSelected ? 'bold' : 'normal' };

    return (
      <TouchableWithoutFeedback testID='login_loginButton' onPress={ this.onMethodSelected(method) } style={ styleDef.methodButton }>
        <View style={ styleDef.methodButtonView }>
          <Text style={ [styleDef.methodText, fontStyle] }>{loginString(labelKey)}</Text>
          {isSelected && <View style={ styleDef.triStyle } />}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderMethodContent() {
    const { Password, Biometric, Guest } = LoginMethods;
    const { selectedMethod } = this.state;

    switch (selectedMethod) {
      case Password:
        return <LoginPassword { ...this.props } />;
      case Biometric:
        return <LoginBiometrics { ...this.props } />;
      case Guest:
        return <View style={ { flex: 1 } } />;
      default:
        return null;
    }
  }

  render() {
    const { Password, Biometric, Guest } = LoginMethods;
    const { isBiometricLoginSupported, supportedBiometryType } = this.props;

    return (
      <View style={ styleDef.container }>
        {this.renderMethodContent()}
        <View style={ styleDef.methodsContainer }>
          {this.renderMethodSelector(Password)}
          <View style={ styleDef.methodSeparator } />
          {isBiometricLoginSupported && (
            <Fragment>
              {this.renderMethodSelector(Biometric, supportedBiometryType)}
              <View style={ styleDef.methodSeparator } />
            </Fragment>
          )}
          {this.renderMethodSelector(Guest)}
        </View>
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  isBiometricLoginSupported: PropTypes.bool,
  supportedBiometryType: PropTypes.string,
  isBiometricLoginSetup: PropTypes.bool,
};
Login.defaultProps = {
  isBiometricLoginSupported: false,
  supportedBiometryType: null,
  isBiometricLoginSetup: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(connectStyle('C360.Login', styleDef)(Login));
