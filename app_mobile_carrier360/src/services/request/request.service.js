import omit from 'lodash/omit';
import get from 'lodash/get';
import Base64 from 'Base64';
import { Platform } from 'react-native';
import Config from 'react-native-config';

/* A Function that will handling building and firing off a http request.
 * @param {Object} requestOptions - Used to build the request.
 * @return {Promise}
 */
/*
 * requestOptions Fields:
 * @param {String} url - *Required* the url to be used for the request
 * @param {String} method - *Required* the http method to use
 * @param {Object} headers - any additional items that need to be added to the header
 * @param {Boolean} omitAuth - used to stop username and password from being added to the header. *If this is undefined, auth WILL BE added to the header*
 */
export default function request(requestOptions) {
  if (!requestOptions.method || !requestOptions.url) {
    throw new Error('RequestOptions missing required property method or url');
  }

  const options = omit(requestOptions, ['omitAuth', 'headers']);
  const defaultErrMsg = `${requestOptions.method} request error for ${requestOptions.url}`;

  return fetch({ ...options, headers: combineHeaders(requestOptions) })
    .catch(err => get(err, 'message', defaultErrMsg))
    .then(response => response.json()
      .then((body) => {
        if (!response.ok) {
          throw Error(`Service returned ${response.status}\n calling ${response.url}\nwith headers ${JSON.stringify(response.headers)}\nand message: ${JSON.stringify(body)}`);
        }
        return body;
      }));
}

function setDefaultHeaders(headers) {
  const { APP_NAME } = Config;

  return {
    'Accept-Encoding': 'gzip,deflate',
    'Accept-Language': 'en-US',
    'Content-Type': 'application/json',
    'User-Agent': `${APP_NAME} (compatible; Mozilla/5.0; MSIE 9.0; Trident/5.0; ${Platform.OS})`,
    'Proxy-Connection': 'Keep-Alive',
    Connection: 'Keep-Alive',
    Accept: 'application/hal+json, application/json',
    ...headers,
  };
}

function combineHeaders(requestOptions) {
  // TODO: There are other items that will eventually need to be added to the header, like impersonation items.
  const optionHeaders = requestOptions.headers || {};

  if (requestOptions.omitAuth === undefined || !requestOptions.omitAuth) {
    return setDefaultHeaders({ ...optionHeaders, ...getCredentials() });
  }

  return setDefaultHeaders(optionHeaders);
}

function getCredentials() {
  // TODO: add ability to get username and password from wherever we decide to store it.
  const username = 'a';
  const password = 'b';
  const base = `Basic ${Base64.btoa(`${username}:${password}`)}`;
  return { Authorization: base };
}

export { setDefaultHeaders, combineHeaders };
