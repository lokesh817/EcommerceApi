const express = require('express');
const router = express.Router();
const { allProducts, deleteProduct, addProduct, update_quantity } = require('../Controller/products');

// Route to get all products
router.get('/', allProducts);

// Route to delete a product
router.delete('/delete', deleteProduct);

// Route to add a new product
router.post('/create', addProduct);

// Route to update the quantity of a product by its ID
router.post('/:id/update_quantity', update_quantity);

module.exports = router;
