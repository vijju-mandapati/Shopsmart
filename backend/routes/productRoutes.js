const express = require("express");
const router = express.Router();

const { addProduct, getProducts } = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");

// Admin only
router.post("/", protect, admin, addProduct);

// Public
router.get("/", getProducts);

module.exports = router;