const axios = require('axios');
const Cryptocurrency = require("../../models/Cryptocurrency");

async function updateCryptoList() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');

    // Update the data in MongoDB
    await Promise.all(response.data.map(async (cryptoData) => {
      // Update or insert the cryptocurrency into the database
      await Cryptocurrency.updateOne(
        { id: cryptoData.id },
        { $set: { name: cryptoData.name } },
        { upsert: true }
      );
    }));

    console.log('Cryptocurrencies updated successfully');
  } catch (error) {
    console.error('Error updating cryptocurrencies:', error);
  }
};

module.exports =  updateCryptoList;
