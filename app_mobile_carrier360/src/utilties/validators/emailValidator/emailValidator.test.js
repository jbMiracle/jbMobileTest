import {
  ValidEmailAddressRegexp,
  isEmailAddressValid,
} from './emailValidator';
import TestEmailAddresses from './test-email-addresses.json';

// Testing via .toMatch() helps because the failed tests will tell you
// which email address triggered the failure.
describe('ValidEmailAddressRegexp', () => {
  it('should test negative against all these invalid email addresses', () => {
    TestEmailAddresses.invalid.forEach((emailAddress) => {
      expect(emailAddress).not.toMatch(ValidEmailAddressRegexp);
    });
  });

  it('should test positive against all these valid email addresses', () => {
    TestEmailAddresses.valid.forEach((emailAddress) => {
      expect(emailAddress).toMatch(ValidEmailAddressRegexp);
    });
  });
});

describe('isEmailAddressValid()', () => {
  it('should determine all these invalid email addresses to be invalid', () => {
    TestEmailAddresses.invalid.forEach((emailAddress) => {
      expect(isEmailAddressValid(emailAddress)).toBe(false);
    });
  });

  it('should determine all these valid email addresses to be valid', () => {
    TestEmailAddresses.valid.forEach((emailAddress) => {
      expect(isEmailAddressValid(emailAddress)).toBe(true);
    });
  });
});
