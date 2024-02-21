const express = require('express');
const cors = require('cors');
const app = express();
const connectToMongoDB = require('./middleware/MongoConnect'); // Import the middleware


async function startServer() {
  try {
    await connectToMongoDB();


    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}


startServer();
