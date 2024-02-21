const axios = require('axios');

async function getCompanies(req, res) {
  try {
    const { currency } = req.body;
    if (currency != "bitcoin" && currency != "ethereum") {
      res.status(500).json({ error: `Failed to fetch ${currency} companies` });
    }
    const response = await axios.get(`https://api.coingecko.com/api/v3/companies/public_treasury/${currency}`);

    const companies = response.data.companies.map(company => company.name);

    res.json({ "companies": companies });
  } catch (error) {
    console.error(`Error fetching ${currency} companies:`, error);
    res.status(500).json({ error: `Failed to fetch ${currency} companies` });
  }
}

module.exports = getCompanies;
