import React, { Component } from 'react';
import { View } from 'react-native';
import { connectStyle, H1, H2 } from 'native-base';
import C360Colors from '../../../themes/360Colors';
import { C360InputField } from '../../../components/C360InputField/C360InputField';
import C360EmailInputField from '../../../components/C360EmailInputField/C360EmailInputField';
import C360PhoneInputField from '../../../components/C360PhoneInputField/C360PhoneInputField';

const styles = {
  container: {
    flexDirection: 'column',
  },
  whiteFont: {
    color: C360Colors.White,
    paddingTop: 10,
  },
  greyFont: {
    color: C360Colors.Grey600,
    paddingTop: 10,
  },
  darkContainer: {
    backgroundColor: C360Colors.Blue500,
    padding: 10,
  },
  lightContainer: {
    backgroundColor: C360Colors.White,
    paddingHorizontal: 5,
    marginVertical: 20,
  },
};

class InputField extends Component {
  constructor() {
    super();

    this.state = {
      inputLettersError: false,
      inputLettersErrorWithShake: false,
      inputEmailAddress: '',
      inputEmailAddressValid: false,
      inputPhoneNumber: '',
      inputPhoneNumberValid: false,
    };
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ [styles.darkContainer] }>
          <H1 style={ styles.whiteFont }>On Standard blue background</H1>
          <H2 style={ styles.whiteFont }>With Left Icon</H2>
          <C360InputField
            placeHolderText='Username'
            leftIcon='jbh-User_Profile'
            dark
          />

          <H2 style={ styles.whiteFont }>With out Left Icon</H2>
          <C360InputField
            placeHolderText='Username'
            dark
          />

          <H2 style={ styles.whiteFont }>With Left Icon and Value</H2>
          <C360InputField
            placeHolderText='Username'
            leftIcon='jbh-User_Profile'
            value='demo'
            dark
          />

          <H2 style={ styles.whiteFont }>Error</H2>
          <C360InputField
            placeHolderText='Username'
            leftIcon='jbh-User_Profile'
            dark
            error
          />

          <H1 style={ styles.whiteFont }>All the reactNative TextInput Props can be passed</H1>
          <H2 style={ styles.whiteFont }>SecureTextEntry With Error</H2>
          <C360InputField
            placeHolderText='Password'
            leftIcon='jbh-Password'
            dark
            secureTextEntry
            error
          />

          <H2 style={ styles.whiteFont }>Maximum length of 10 characters </H2>
          <C360InputField
            placeHolderText='Maximum Length'
            dark
            maxLength={ 10 }
          />
        </View>
        <View style={ [styles.lightContainer] }>
          <H1 style={ styles.greyFont }>On Light Background</H1>
          <H2 style={ styles.greyFont }>With Left Icon</H2>
          <C360InputField
            placeHolderText='Username'
            leftIcon='jbh-User_Profile'
          />
          <H2 style={ styles.greyFont }>With out Left Icon</H2>
          <C360InputField placeHolderText='Username' />
          <H2 style={ styles.greyFont }>With Left Icon and Value</H2>
          <C360InputField
            placeHolderText='Username'
            leftIcon='jbh-User_Profile'
            value='demo'
          />
          <H2 style={ styles.greyFont }>Error</H2>
          <C360InputField
            placeHolderText='Username'
            leftIcon='jbh-User_Profile'
            error
          />
          <H1 style={ styles.greyFont }>All the reactNative TextInput Props can be passed</H1>
          <H2 style={ styles.greyFont }>SecureTextEntry With Error</H2>
          <C360InputField
            placeHolderText='Password'
            leftIcon='jbh-Password'
            secureTextEntry
            error
          />

          <H2 style={ styles.greyFont }>Maximum length of 10 characters </H2>
          <C360InputField
            placeHolderText='Maximum Length'
            maxLength={ 10 }
          />

          <H1 style={ styles.greyFont }>Shake On Invalid Input</H1>
          <H2 style={ styles.greyFont }>This form only accepts letters</H2>
          <C360InputField
            placeHolderText='Username'
            leftIcon='jbh-User_Profile'
            error={ this.state.inputLettersError }
            onChangeText={ (text) => {
              const valid = /^[a-z]+$/i.test(text);
              this.setState(() => ({ inputLettersError: !valid }));
            } }
          />

          <H1 style={ styles.greyFont }>Shake and Vibrate On Invalid Input</H1>
          <H2 style={ styles.greyFont }>This form only accepts letters</H2>
          <C360InputField
            placeHolderText='Username'
            leftIcon='jbh-User_Profile'
            error={ this.state.inputLettersErrorWithShake }
            errorVibrate
            onChangeText={ (text) => {
              const valid = /^[a-z]+$/i.test(text);
              this.setState(() => ({ inputLettersErrorWithShake: !valid }));
            } }
          />

          <H2 style={ styles.greyFont }>Email Address Validating Input</H2>
          <C360EmailInputField
            placeHolderText='Email address'
            value={ this.state.inputEmailAddress }
            onChangeText={ emailAddress => this.setState(state => ({ ...state, inputEmailAddress: emailAddress })) }
            onValidationUpdate={
              hasValidEmail => this.setState(state => ({ ...state, inputEmailAddressValid: hasValidEmail }))
            }
            error={ !this.state.inputEmailAddressValid }
            leftIcon='jbh-Contact_Mail'
          />

          <H2 style={ styles.greyFont }>Phone Number Validating Input</H2>
          <C360PhoneInputField
            placeHolderText='Phone Number'
            value={ this.state.inputPhoneNumber }
            onChangeText={
              phoneNumber => this.setState(state => ({ ...state, inputPhoneNumber: phoneNumber }))
            }
            onValidationUpdate={
              hasValidPhone => this.setState(state => ({ ...state, inputPhoneNumberValid: hasValidPhone }))
            }
            error={ !this.state.inputPhoneNumberValid }
            leftIcon='jbh-Contact_Phone'
          />
        </View>
      </View>
    );
  }
}

export default connectStyle('C360.InputFieldExamples', styles)(InputField);

