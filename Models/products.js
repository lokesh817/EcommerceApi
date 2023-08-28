const mongoose = require("mongoose");

// Define the product schema
const productSchema = mongoose.Schema({
    productid: {
        type: String,
        unique: true, // Ensure product IDs are unique
        required: true // Product ID is required
    },
    name: {
        type: String,
        required: true, // Product name is required
    },
    quantity: {
        type: Number, // Quantity can be a number
    }
}, 
{
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Export the model based on the product schema
module.exports = mongoose.model('Products', productSchema);
