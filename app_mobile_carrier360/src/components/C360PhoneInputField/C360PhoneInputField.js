import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { C360InputField } from '../C360InputField/C360InputField';
import { isPhoneNumberValid, formatPhoneNumber } from '../../utilties';

class C360PhoneInputField extends PureComponent {
  validatePhone = (phoneNumber) => {
    const { onValidationUpdate, onChangeText } = this.props;
    const formattedNumber = formatPhoneNumber(phoneNumber);
    const hasValidPhoneNumber = isPhoneNumberValid(phoneNumber);

    if (onChangeText) {
      onChangeText(formattedNumber);
    }

    if (onValidationUpdate) {
      onValidationUpdate(hasValidPhoneNumber);
    }
  };

  render() {
    const options = omit(this.props, ['onValidationUpdate', 'onChangeText', 'keyboardType']);

    return (
      <C360InputField
        { ...options }
        keyboardType='phone-pad'
        maxLength={ 14 }
        onChangeText={ this.validatePhone }
      />
    );
  }
}

C360PhoneInputField.propTypes = {
  onValidationUpdate: PropTypes.func,
  onChangeText: PropTypes.func,
};

C360PhoneInputField.defaultProps = {
  onValidationUpdate: undefined,
  onChangeText: undefined,
};

export default C360PhoneInputField;
