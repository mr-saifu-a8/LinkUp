const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");
const { findUserByEmail } = require("../config/database");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

  if (!token) {
    throw new ApiError(401, "Authentication token is required");
  }

  const decoded = jwt.verify(token, JWT_SECRET);
  const user = await findUserByEmail(decoded.email);

  if (!user) {
    throw new ApiError(401, "User no longer exists");
  }

  req.user = user;
  next();
});

module.exports = authMiddleware;
