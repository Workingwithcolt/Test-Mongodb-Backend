const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server after the database connection is established
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB:', err);
    });