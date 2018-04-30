import strings from '.';
import en from './locales/en';
import es from './locales/es';

describe('Localizations', () => {
  describe('Getting text', () => {
    it('it can get english text', () => {
      const text = strings('Login.login_button', { locale: 'en' });
      expect(text).toMatch(en.Login.login_button);
    });

    it('it can get spanish text', () => {
      const text = strings('Login.login_button', { locale: 'es' });
      expect(text).toMatch(es.Login.login_button);
    });
  });
});
