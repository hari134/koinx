const express = require('express');
const cors = require('cors');
const app = express();
const connectToMongoDB = require('./middleware/MongoConnect'); // Import the middleware
// const publicRoutes = require('./routes/PublicRoutes')
const cryptoRoutes = require('./routes/crypto');
const cron = require('node-cron');
const config = require('./config/config.json');
const updateCoinsList = require("./cron-jobs/crypto/updateCryptoList"); 

 async function scheduleCronJobs() {
  try {
    const updateCryptoListFrequency = config["cron-jobs"]["updateCryptoList"];

    // Schedule the cron job to run updateCoinsList based on the frequency from config
    cron.schedule(updateCryptoListFrequency , async () => {
      try {
        console.log('Updating coin list...');
        await updateCoinsList();
        console.log('Coin list updated successfully.');
      } catch (error) {
        console.error('Error updating coin list:', error);
      }
    });
  } catch (error) {
    console.error('Error scheduling cron jobs:', error);
  }
}
async function startServer() {
  try {
    await connectToMongoDB();

    app.use(cors());

    app.use(cryptoRoutes);
    // app.use(privateRoutes);

    scheduleCronJobs();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}


startServer();
