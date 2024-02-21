const convertCryptocurrencies = require("./convertCryptocurrency");
const getComapnies = require("./getCompanies");
module.exports = {
  paths: {
    '/convert': {
      ...convertCryptocurrencies,
    },
    '/getCompanies': {
      ...getComapnies,
    },
  },
};