import sendForgotPassword from '.';
import request from '../request';
import strings from '../localization/localization.service';

jest.mock('../request', () => jest.fn());

describe('ForgotPassword Service', () => {
  it('can request a password reset', async () => {
    request.mockImplementation(() => Promise.resolve({ data: true, status: 'SUCCESS', success: true }));

    expect(await sendForgotPassword('test@test.com')).toBe(true);
  });

  it('fails because of a success-related error', async () => {
    request.mockImplementation(() => Promise.resolve({ data: true, status: 'USER_NOT_FOUND', success: true }));

    await expect(sendForgotPassword('test@test.com')).rejects.toThrow(strings('ForgotPassword.errors.user_not_found'));
  });

  it('fails because of an unknown success-related error', async () => {
    request.mockImplementation(() => Promise.resolve({ data: true, status: 'SOME_RANDOM_ERROR', success: true }));

    await expect(sendForgotPassword('test@test.com')).rejects.toThrow(strings('App.genericError'));
  });

  it('fails because of an non-success-related error', async () => {
    request.mockImplementation(() => Promise.resolve({ data: true, status: null, success: false }));

    await expect(sendForgotPassword('test@test.com')).rejects.toThrow(strings('App.genericError'));
  });
});
