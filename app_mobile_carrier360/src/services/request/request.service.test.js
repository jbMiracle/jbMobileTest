import request, { combineHeaders } from '.';

const requestOptions = {
  url: 'http://example.com',
  method: 'GET',
  body: 'baconbaconbacon',
  headers: {
    BreakfastFoods: 'AreTheBest',
  },
};

const requestOptionsNoAuth = {
  ...requestOptions,
  omitAuth: true,
};

jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');
  Platform.OS = 'ios';

  return Platform;
});
describe('Request Service Header Handling', () => {
  it('combineHeaders() can combine optional and default headers', () => {
    const result = combineHeaders(requestOptions);

    expect(result).toMatchSnapshot();
  });

  it('combineHeaders() can omit auth from headers when necessary', () => {
    const resultWithAuth = combineHeaders(requestOptions);
    const resultWithOutAuth = combineHeaders(requestOptionsNoAuth);

    expect(resultWithOutAuth).not.toEqual(resultWithAuth);
    expect(resultWithOutAuth).toMatchSnapshot();
  });
});

describe('Request Service Request Handling', () => {
  it('request() can make an HTTP request using fetch', async () => {
    const json = jest.fn().mockImplementation(options => Promise.resolve({ ...options }));
    const res = options => ({ ok: true, json: () => json(options) });
    global.fetch = jest.fn().mockImplementation(options => Promise.resolve(res(options)));

    const response = await request(requestOptions);
    expect(response).toMatchSnapshot();
  });

  it('request() can throw when missing required parameters', () => {
    expect(() => request({})).toThrow('RequestOptions missing required property method or url');
  });

  it('request() can return an error message when an http request fails', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject());

    return request({ url: 'http://example.com', method: 'POST' })
      .catch(err => expect(err).toMatchSnapshot());
  });
});
