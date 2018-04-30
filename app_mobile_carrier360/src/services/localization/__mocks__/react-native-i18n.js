import I18nJs from 'i18n-js';

/*
 * react-native-i18n.js uses NativeModules to check the OS's locale, and NativeModules is not available during testing.
 * As a result we had to create a mock of react-native-i18n.js that defaults to a locale.
 */

I18nJs.locale = 'en';
export const getLanguages = () => Promise.resolve(['en']);
export default I18nJs;
