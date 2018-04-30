import {
  ValidPhoneNumberRegexp,
  isPhoneNumberValid,
} from './phoneNumberValidator';
import TestPhoneNumbers from './test-phone-numbers.json';

describe('ValidPhoneNumberRegexp', () => {
  it('should test negative against all these invalid phone number', () => {
    TestPhoneNumbers.invalid.forEach((phoneNumber) => {
      expect(phoneNumber).not.toMatch(ValidPhoneNumberRegexp);
    });
  });

  it('should test positive against all these valid phone numbers', () => {
    TestPhoneNumbers.valid.forEach((phoneNumber) => {
      expect(phoneNumber).toMatch(ValidPhoneNumberRegexp);
    });
  });
});

describe('isPhoneNumberValid()', () => {
  it('should determine all these invalid phone numbers to be invalid', () => {
    TestPhoneNumbers.invalid.forEach((phoneNumber) => {
      expect(isPhoneNumberValid(phoneNumber)).toBe(false);
    });
  });

  it('should determine all these valid phone numbers to be valid', () => {
    TestPhoneNumbers.valid.forEach((phoneNumber) => {
      expect(isPhoneNumberValid(phoneNumber)).toBe(true);
    });
  });
});

