const express = require('express');
const router = express.Router();

const { convertCryptocurrencies } = require("../controllers/crypto/index");
router.use(express.json());
router.post('/convert', convertCryptocurrencies);


module.exports = router;
