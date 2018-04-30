import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import C360PhoneInputField from './C360PhoneInputField';
import { isPhoneNumberValid, formatPhoneNumber } from '../../utilties';

jest.mock('../../utilties', () => ({
  isPhoneNumberValid: jest.fn(),
  formatPhoneNumber: jest.fn(),
}));

const props = {
  onValidationUpdate: jest.fn(),
  onChangeText: jest.fn(),
};

describe('C360PhoneInputField', () => {
  describe('performs the validatePhone operation in a pretend context', () => {
    isPhoneNumberValid.mockImplementation(() => 'abc');
    formatPhoneNumber.mockImplementation(() => 'xyz');
    const phoneField = new C360PhoneInputField(props);
    phoneField.validatePhone('some text');

    it('should validate the inputted text and call onValidationUpdate with the result', () => {
      expect(props.onValidationUpdate.mock.calls[0][0]).toBe('abc');
    });

    it('should format the inputted text and call onChangeText with the result', () => {
      expect(props.onChangeText.mock.calls[0][0]).toBe('xyz');
    });
  });

  it('can render an empty component', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<C360PhoneInputField />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
