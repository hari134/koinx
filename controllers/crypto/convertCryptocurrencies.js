const axios = require("axios");
const cryptocurrencyExists = require("../../helpers/cryptocurrencyExists")

async function convertCryptocurrencies(req, res) {
  try {
    const { fromCurrency, toCurrency, date } = req.body;
    if (!cryptocurrencyExists(fromCurrency) || cryptocurrencyExists(toCurrency)) {
      res.status(500).json({ error: 'Invalid Cryptocurrency' });
    }

    const fromCurrencyInUSD = await getUSDfromCrypto(fromCurrency, date);
    const toCurrencyInUSD = await getUSDfromCrypto(toCurrency, date);
    const fromCurrencyInToCurrency = fromCurrencyInUSD / toCurrencyInUSD;

    const result = {
      fromCurrency,
      toCurrency,
      date,
      priceInToCurrency: fromCurrencyInToCurrency,
    };

    res.json(result);
  } catch (error) {
    console.error('Error fetching cryptocurrency price:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

async function getUSDfromCrypto(coinId, date) {
  // Fetch cryptocurrency price data from Coingecko API
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/history?date=${date}&localization=false`, {
    params: {
      date,
      localization: false,
    },
  });
  const priceInUSD = response.data.market_data.current_price.usd;
  return priceInUSD;
}

module.exports = convertCryptocurrencies;
