require('es6-promise').polyfill();
require('isomorphic-fetch');

const defaultHeaders = {
  'Content-Type': 'application/json'
};

const getJson = (url, headers = {}) => {

  return fetch(url, {
    headers: {
      ...defaultHeaders,
      ...headers
    }
  }).then(resp => resp.json());
};

export default getJson;
