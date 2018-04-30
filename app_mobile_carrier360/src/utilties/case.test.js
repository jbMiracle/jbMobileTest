import {
  camelToUnderscore,
  camelToSnake,
} from './case';

describe('case transformers', () => {
  describe('camelToUnderscore (camel case to underscore-separated, preseving case)', () => {
    it('should convert a two-word symbol', () => {
      expect(camelToUnderscore('someThing')).toBe('some_Thing');
    });

    it('should convert a three-word symbol', () => {
      expect(camelToUnderscore('unoDosTres')).toBe('uno_Dos_Tres');
    });
  });

  describe('camelToSnake', () => {
    it('should convert a two-word symbol', () => {
      expect(camelToSnake('someThing')).toBe('some_thing');
    });

    it('should convert a three-word symbol', () => {
      expect(camelToSnake('unoDosTres')).toBe('uno_dos_tres');
    });
  });
});
