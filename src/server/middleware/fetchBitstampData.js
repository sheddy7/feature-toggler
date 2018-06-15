require('es6-promise').polyfill();
require('isomorphic-fetch');

const baseUrl = 'https://www.bitstamp.net/api/v2/ticker/';

const defaultHeaders = {
  'Content-Type': 'application/json'
};

const buildBitstampUrl = (ticker) => {

  if (!ticker) return null;

  return baseUrl + ticker;
};

const handleErrors = (resp) => {
  if (!resp.ok) throw Error(resp.statusText);

  return resp;
};

const fetchBitstampData = (req, res, next) => {

  const url = buildBitstampUrl(req.query.ticker);

  fetch(url, defaultHeaders)
  .then(handleErrors)
  .then(resp => resp.json())
  .then(resp => res.send(resp))
  .catch(err => {
    next(err);
  });
};

export default fetchBitstampData;
