const Cryptocurrency = require('../models/Cryptocurrency.js');

async function checkCryptocurrencyExists(coinId) {
  try {
    if (typeof coinId !== 'string') {
      return false;
    }   // Query the database for the given coinId
    const cryptocurrency = await Cryptocurrency.findOne({ id: coinId });

    // If coin is found, return true, else return false
    return cryptocurrency !== null;
  } catch (error) {
    console.error('Error checking cryptocurrency existence:', error);
    throw new Error('Failed to check cryptocurrency existence');
  }
}

module.exports = checkCryptocurrencyExists;
