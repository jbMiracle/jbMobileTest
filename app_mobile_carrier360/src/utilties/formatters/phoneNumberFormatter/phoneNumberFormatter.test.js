import { formatPhoneNumber, phoneNumberNoFormatting } from './phoneNumberFormatter';
import TestPhoneNumbers from './test-phone-numbers.json';

const validTenDigitFormattedNumber = new RegExp(/^\(([2-9])([0-9]{2})\)\s([2-9])([0-9]{2})-([0-9]{4})$/);
const validSevenDigitFormattedNumber = new RegExp(/^([2-9])([0-9]{2})-([0-9]{4})$/);
const validNonFormattedNumber = new RegExp(/^[0-9]*$/);

describe('PhoneNumberFormatter', () => {
  it('should format all ten digit phone numbers to match the format (456) 567-8090', () => {
    TestPhoneNumbers.valid.forEach((phoneNumber) => {
      expect(formatPhoneNumber(phoneNumber)).toMatch(validTenDigitFormattedNumber);
    });
  });

  it('should format all seven digit phone numbers to match the format 567-8090', () => {
    TestPhoneNumbers.validSeven.forEach((phoneNumber) => {
      expect(formatPhoneNumber(phoneNumber)).toMatch(validSevenDigitFormattedNumber);
    });
  });

  it('should fail to format invalid phone numbers and return the number it was given', () => {
    TestPhoneNumbers.invalid.forEach((phoneNumber) => {
      expect(formatPhoneNumber(phoneNumber)).toMatch(phoneNumber);
    });
  });

  it('should remove any formatting on a phone number', () => {
    TestPhoneNumbers.valid.forEach((phoneNumber) => {
      expect(phoneNumberNoFormatting(phoneNumber)).toMatch(validNonFormattedNumber);
    });
  });
});
