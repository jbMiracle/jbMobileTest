import { queryBiometricSupport, authenticate } from '.';

describe('queryBiometricSupport()', async () => {
  it('should return an object with isSupported and isSetup', async () => {
    const biometricSupport = await queryBiometricSupport();
    expect(biometricSupport).toEqual({
      isSupported: false,
      supportedType: null,
    });
    expect(biometricSupport).toMatchSnapshot();
  });
});
describe('authenticate()', () => {
  it('should return, whether or not the user authenticated successfully, with a boolean', async () => {
    const authenticating = await authenticate();
    expect(authenticating).toBe(false);
    expect(authenticating).toMatchSnapshot();
  });
});
