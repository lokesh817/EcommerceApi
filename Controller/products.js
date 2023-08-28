const productsSchema=require('../Models/products'); // Import the product schema

// Get all products
module.exports.allProducts = async (req, res) => {
    try {
        const products = await productsSchema.find({}); // Find all products
        return res.status(200).json({
            data: {
                Products: products,
            },
            message: "All products list"
        });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while getting products" });
    }
}

// Add a new product
module.exports.addProduct = async (req, res) => {
    const { id, name, qty } = req.body.product;
    try {
        const ifExist = await productsSchema.findOne({ productid: id }); // Check if product already exists
        if (!ifExist) {
            const newProduct = await productsSchema.create({
                productid: id,
                name: name,
                quantity: qty
            });
            return res.status(200).json(
                {
                    data: {
                        product: newProduct,
                    },
                    message: "Product added successfully"
                }
            );
        } else {
            return res.status(500).json({ message: "ID already Assigned" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while adding product" });
    }
}

// Delete a product
module.exports.deleteProduct = async (req, res) => {
    const id = req.query.id;
    try {
        const product = await productsSchema.findOneAndDelete({ productid: id }); // Find and delete a product
        if (product) {
            return res.status(200).json(
                {
                    data: {
                        message: "Product deleted"
                    }
                });
        } else {
            return res.status(500).json({ message: `${id} does not belong to any product` });
        }
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while deleting product" });
    }
}

// Update product quantity
module.exports.update_quantity = async (req, res) => {
    const id = req.params.id;
    const qty = req.query.qty;
    try {
        const product = await productsSchema.findOneAndUpdate(
            { productid: id },
            { quantity: qty },
            { new: true }
        ); // Find and update product's quantity
        if (product) {
            return res.status(200).json(
                {
                    data: {
                        product: product,
                    },
                    message: "Updated successfully"
                });
        } else {
            return res.status(500).json({ message: `Product ${id} not found` });
        }
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong while updating product" });
    }
}
