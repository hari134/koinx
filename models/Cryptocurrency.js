const mongoose = require('mongoose');

const cryptocurrencySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  symbol: { type: String, required: true },
  name: { type: String, required: true },
});

const Cryptocurrency = mongoose.model('cryptocurrency', cryptocurrencySchema);

module.exports = Cryptocurrency;
