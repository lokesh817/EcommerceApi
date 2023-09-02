// Import required modules
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Set up the default port, or use the one from the environment variables
const port = process.env.PORT || 8000;

// Create an Express app
const app = express();


// Use body-parser to parse JSON requests
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Set up the default route using the index_route module
app.use('/', require('./Routes/index_route'));

// Connect to the MongoDB database using the provided URL from environment variables
mongoose.connect(process.env.MONGOURL)
    .then(() => {
        // Start the server once the database connection is established
        app.listen(port, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.log("Unable to connect to the database:", err);
    });
