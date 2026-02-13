const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Verify token
exports.protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    token = token.split(" ")[1];

    const decoded = jwt.verify(token, "secretkey");

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch {
    res.status(401).json({ message: "Token failed" });
  }
};

// Admin check
exports.admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Admin only" });
  }
};