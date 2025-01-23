import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const getSupportedCurrencies = async () => {
  const response = await axios.get(`${BASE_URL}/coins/supported_vs_currencies`);
 response.data.map((x) => console.log(x.symbol));
  return response.data;
};

export const getConversionRate = async (id, vs_currencie) => {
  const response = await axios.get(
    `${BASE_URL}/simple/price?ids=${id}&vs_currencies=${vs_currencie}`
  );
  console.log(response);
  return response.data;
};

export const getExchanges = async () => {
  const response = await axios.get(`${BASE_URL}/exchanges/list`);
  return response.data;
};

export const getCoinTickers = async (coinId) => {
  const response = await axios.get(`${BASE_URL}/coins/${coinId}/tickers`);
  return response.data.tickers;
};

export const getCoinsList = async () => {
  const response = await axios.get(`${BASE_URL}/coins/list`);
  return response.data;
};

