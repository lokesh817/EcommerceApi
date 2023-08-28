const express = require('express');
const router = express.Router();

// Requiring a router file for handling products-related routes
// When a request comes to '/products', the router will delegate to the './products' router file
router.use('/products', require('./products'));

// Export the main router which includes sub-routes
module.exports = router;
