import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { C360InputField } from '../C360InputField/C360InputField';
import { isEmailAddressValid } from '../../utilties';

class C360EmailInputField extends PureComponent {
  validateEmail = (emailAddress) => {
    const { onValidationUpdate, onChangeText } = this.props;
    const hasValidEmail = isEmailAddressValid(emailAddress);

    if (onValidationUpdate) {
      onValidationUpdate(hasValidEmail);
    }

    if (onChangeText) {
      onChangeText(emailAddress);
    }
  };

  render() {
    const options = omit(this.props, ['onValidationUpdate', 'onChangeText', 'keyboardType']);

    return (
      <C360InputField
        { ...options }
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={ false }
        onChangeText={ this.validateEmail }
      />
    );
  }
}

C360EmailInputField.propTypes = {
  onValidationUpdate: PropTypes.func,
  onChangeText: PropTypes.func,
};

C360EmailInputField.defaultProps = {
  onValidationUpdate: undefined,
  onChangeText: undefined,
};

export default C360EmailInputField;
