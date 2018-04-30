/* eslint-env detox/detox */

describe('Navigation Testing', () => {
  beforeEach(async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    await device.reloadReactNative();
  });

  test('can display messages', async () => {
    await element(by.id('login_loginButton')).tap();
    await expect(element(by.id('home'))).toBeVisible();

    await element(by.id('bottomnav_Offers')).tap();
    await expect(element(by.id('offers'))).toBeVisible();

    await element(by.id('bottomnav_FindLoads')).tap();
    await expect(element(by.id('findLoads'))).toBeVisible();

    await element(by.id('bottomnav_ManageLoads')).tap();
    await expect(element(by.id('manageLoads'))).toBeVisible();

    await element(by.id('bottomnav_Perks')).tap();
    await expect(element(by.id('perks'))).toBeVisible();
  });
});
