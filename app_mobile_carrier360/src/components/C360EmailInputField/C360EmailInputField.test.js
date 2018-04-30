import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import C360EmailInputField from './C360EmailInputField';
import { isEmailAddressValid } from '../../utilties';

jest.mock('../../utilties', () => ({
  isEmailAddressValid: jest.fn(),
}));

describe('C360EmailInputField', () => {
  describe('performs the validateEmail operation in a pretend context', () => {
    isEmailAddressValid.mockImplementation(() => 'abc');

    const props = {
      onValidationUpdate: jest.fn(),
      onChangeText: jest.fn(),
    };

    const emailField = new C360EmailInputField(props);
    emailField.validateEmail('some text');

    it('should validate the inputted text and call onValidationUpdate with the result', () => {
      expect(props.onValidationUpdate.mock.calls[0][0]).toBe('abc');
    });

    it('should call onChangeText with the inputted text', () => {
      expect(props.onChangeText.mock.calls[0][0]).toBe('some text');
    });
  });

  it('can render an empty component', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<C360EmailInputField />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

