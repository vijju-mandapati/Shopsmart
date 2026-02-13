const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// ➜ Place order
exports.placeOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.product"
    );

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // calculate total
    let total = 0;
    cart.items.forEach((item) => {
      total += item.product.price * item.quantity;
    });

    const order = await Order.create({
      user: req.user._id,
      items: cart.items,
      totalPrice: total,
    });

    // clear cart
    cart.items = [];
    await cart.save();

    res.json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ➜ Get my orders
exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "items.product"
    );

    res.json(orders);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};