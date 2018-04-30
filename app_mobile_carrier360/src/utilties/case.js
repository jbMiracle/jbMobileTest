
export const camelToUnderscore = text => text.replace(/([a-z])([A-Z])/g, (match, one, two) => `${one}_${two}`);

export const camelToSnake = text => camelToUnderscore(text).toLowerCase();
