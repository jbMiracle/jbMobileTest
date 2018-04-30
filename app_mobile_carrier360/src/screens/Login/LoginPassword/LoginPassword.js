import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { connectStyle, Text, Button } from 'native-base';
import PropTypes from 'prop-types';
import styleDef from '../LoginPassword/LoginPassword.style';
import C360LogoContainer from '../../../components/C360LogoContainer/C360LogoContainer';
import { C360InputField } from '../../../components/C360InputField/C360InputField';
import strings from '../../../services/localization';

const loginPasswordTextOptions = { scope: 'LoginPassword' };

class LoginPassword extends Component {
  state = {
    username: null,
    password: null,
  };
  forgotPasswordClicked = () => {
    this.props.navigation.navigate('ForgotPassword');
  };
  createAccountClicked = () => {
    Alert.alert(null, 'Create Account Clicked!');
  };
  loginClicked = () => {
    this.props.navigation.navigate('Main');
  };
  render() {
    return (
      <C360LogoContainer>
        <C360InputField
          placeHolderText={ strings('username', loginPasswordTextOptions) }
          leftIcon='jbh-Profile_Icon'
          dark
          testID='login_Username'
          onChangeText={ (text) => {
            this.setState({ username: text });
          } }
        />
        <C360InputField
          placeHolderText={ strings('password', loginPasswordTextOptions) }
          leftIcon='jbh-Password_2'
          dark
          secureTextEntry
          testID='login_Password'
          onChangeText={ (text) => {
            this.setState({ password: text });
          } }
        />
        <View style={ styleDef.forgotPasswordContainer }>
          <Text testID='forgotPassword' onPress={ this.forgotPasswordClicked }>
            <Text style={ styleDef.lightText }>{ strings('forgotPassword_1', loginPasswordTextOptions) }</Text>
            <Text style={ styleDef.semiBoldText }>{ strings('forgotPassword_2', loginPasswordTextOptions) }</Text>
            <Text style={ styleDef.lightText }>?</Text>
          </Text>
        </View>
        <Button
          style={ { flex: 1, marginVertical: 30 } }
          block
          primaryDark
          dark
          disabled={ !(this.state.username && this.state.password) }
          onPress={ this.loginClicked }
        >
          <Text>
            { strings('login_button', loginPasswordTextOptions) }
          </Text>
        </Button>
        <View style={ styleDef.createAccountContainer }>
          <Text testID='createAccount' onPress={ this.createAccountClicked }>
            <Text style={ styleDef.lightText }>{ strings('create_account_1', loginPasswordTextOptions) }</Text>
            <Text style={ styleDef.semiBoldText }>{ strings('create_account_2', loginPasswordTextOptions) }</Text>
          </Text>
        </View>
      </C360LogoContainer>
    );
  }
}
LoginPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
  }).isRequired,
};
export default connectStyle('C360.LoginPassword', styleDef)(LoginPassword);
