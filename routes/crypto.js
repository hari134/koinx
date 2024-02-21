const express = require('express');
const router = express.Router();

const { convertCryptocurrencies ,getCompanies} = require("../controllers/crypto/index");
router.use(express.json());
router.post('/convert', convertCryptocurrencies);
router.get('/getCompanies/', getCompanies);

module.exports = router;
