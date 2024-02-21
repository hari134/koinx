const mongoose = require('mongoose');
const config = require('../config/config.json');

const uri = config["db"]["MONGODB_URI"];

async function connectToMongoDB() {
  try {
    await mongoose.connect(uri);

    console.log("connected to database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};


module.exports = connectToMongoDB;
