export function formatPhoneNumber(number) {
  const numberNoSpecialCharacters = phoneNumberNoFormatting(number);
  if (numberNoSpecialCharacters.length === 7) {
    const m = numberNoSpecialCharacters.match(/^(\d{3})(\d{4})$/);
    return (!m) ? '' : `${m[1]}-${m[2]}`;
  } else if (numberNoSpecialCharacters.length === 10) {
    const m = numberNoSpecialCharacters.match(/^(\d{3})(\d{3})(\d{4})$/);
    return (!m) ? '' : `(${m[1]}) ${m[2]}-${m[3]}`;
  }

  return number;
}

export function phoneNumberNoFormatting(number) {
  return number.replace(/[^0-9]/g, '');
}
