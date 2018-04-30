import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { connectStyle, Text, Button } from 'native-base';
import PropTypes from 'prop-types';
import styleDef from './ForgotPassword.style';
import strings from '../../services/localization';
import C360LogoContainer from '../../components/C360LogoContainer/C360LogoContainer';
import { App as AppActions } from '../../state/actions';
import C360EmailInputField from '../../components/C360EmailInputField/C360EmailInputField';

const forgotTextOptions = { scope: 'ForgotPassword' };
const mapStateToProps = state => ({
  forgotPasswordSuccess: state.forgotPassword.forgotPasswordSuccess,
  forgotPasswordError: state.forgotPassword.forgotPasswordError,
});
const mapDispatchToProps = dispatch => ({
  sendPasswordReset: email => dispatch(AppActions.forgotPassword(email)),
});

export class ForgotPasswordScreen extends Component {
  state = {
    hasValidEmail: false,
    emailAddress: '',
  };

  componentDidUpdate(prevProps) {
    if (prevProps.forgotPasswordSuccess !== this.props.forgotPasswordSuccess && this.props.forgotPasswordSuccess) {
      this.showSuccessMessage();
    } else if (prevProps.forgotPasswordError !== this.props.forgotPasswordError && this.props.forgotPasswordError) {
      this.showErrorMessage(this.props.forgotPasswordError);
    }
  }

  showSuccessMessage = () => {
    Alert.alert(
      null,
      strings('success', forgotTextOptions),
      [
        { text: strings('App.genericOk'), onPress: () => this.props.navigation.pop() },
      ],
    );
  };

  showErrorMessage = (message) => {
    Alert.alert(null, message);
  };

  requestPasswordReset = () => {
    this.props.sendPasswordReset(this.state.emailAddress);
  };

  render() {
    return (
      <C360LogoContainer
        showBackButton
        backButtonOnPress={ () => this.props.navigation.pop() }
        headerText={ strings('forgetTitle', forgotTextOptions) }
        descriptionText={ strings('forgetBody', forgotTextOptions) }
      >

        <C360EmailInputField
          style={ styleDef.inputStyle }
          placeHolderText={ strings('inputPlaceholder', forgotTextOptions) }
          value={ this.state.emailAddress }
          onChangeText={ emailAddress => this.setState(state => ({ ...state, emailAddress })) }
          onValidationUpdate={ hasValidEmail => this.setState(state => ({ ...state, hasValidEmail })) }
          leftIcon='jbh-Contact_Mail'
          dark
        />

        <Button
          testID='forgotPassword_requestButton'
          style={ styleDef.buttonStyle }
          onPress={ this.requestPasswordReset }
          block
          large
          primaryDark
          disabled={ !this.state.hasValidEmail }
        >
          <Text>{ strings('requestButton', forgotTextOptions) }</Text>
        </Button>
      </C360LogoContainer>
    );
  }
}

ForgotPasswordScreen.defaultProps = {
  forgotPasswordError: null,
  forgotPasswordSuccess: false,
};

ForgotPasswordScreen.propTypes = {
  forgotPasswordError: PropTypes.string,
  forgotPasswordSuccess: PropTypes.bool,
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
  sendPasswordReset: PropTypes.func.isRequired,
};

const ReduxConnectedForgotPassword = connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreen);
export default connectStyle('C360.ForgotPassword', styleDef)(ReduxConnectedForgotPassword);
