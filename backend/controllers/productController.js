const Product = require("../models/Product");

// 🔹 Add Product (Admin)
exports.addProduct = async (req, res) => {
  try {
    const { name, price, image, category, stock } = req.body;

    const product = await Product.create({
      name,
      price,
      image,
      category,
      stock,
    });

    res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// 🔹 Get All Products (User)
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};