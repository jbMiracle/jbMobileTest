/* eslint-disable max-len */
import { phoneNumberNoFormatting } from '../../formatters/phoneNumberFormatter/phoneNumberFormatter';

export const ValidPhoneNumberRegexp = new RegExp(/^\(?([2-9])([0-9]{2})\)?[-. ]?([2-9])([0-9]{2})[-. ]?([0-9]{4})$/);
export function isPhoneNumberValid(phoneNumber) {
  const phoneNumberWithoutSpecialChars = phoneNumberNoFormatting(phoneNumber);
  if (phoneNumberWithoutSpecialChars.length < 10) {
    return false;
  }
  return ValidPhoneNumberRegexp.test(phoneNumber);
}
