const bcrypt = require("bcryptjs");
const { createUser, findUserByEmail } = require("../config/database");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");
const { generateToken } = require("../utils/jwt");
const PasswordReset = require("../models/PasswordReset");
const { generateOtp } = require("../utils/otp");
const { sendOtpEmail } = require("../utils/email");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name?.trim() || !email?.trim() || !password?.trim()) {
    throw new ApiError(400, "Name, email and password are required");
  }

  if (password.length < 6) {
    throw new ApiError(400, "Password must be at least 6 characters");
  }

  const existingUser = await findUserByEmail(email.toLowerCase());
  if (existingUser) {
    throw new ApiError(409, "User already exists with this email");
  }

  const newUser = await createUser({
    name: name.trim(),
    email: email.toLowerCase(),
    password,
  });

  const token = generateToken({
    email: newUser.email,
    id: newUser._id.toString(),
  });

  res.status(201).json(
    new ApiResponse(
      201,
      {
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
        token,
      },
      "Account created successfully",
    ),
  );
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email?.trim() || !password?.trim()) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await findUserByEmail(email.toLowerCase());
  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(401, "Invalid email or password");
  }

  const token = generateToken({ email: user.email, id: user._id.toString() });

  res.status(200).json(
    new ApiResponse(
      200,
      {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        token,
      },
      "Logged in successfully",
    ),
  );
});

const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json(
    new ApiResponse(
      200,
      {
        user: {
          id: req.user._id,
          name: req.user.name,
          email: req.user.email,
        },
      },
      "User fetched successfully",
    ),
  );
});

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email?.trim()) {
    throw new ApiError(400, "Email is required");
  }

  const user = await findUserByEmail(email.toLowerCase());
  if (!user) {
    throw new ApiError(404, "No account found with this email");
  }

  const otp = generateOtp();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  await PasswordReset.deleteMany({ email: user.email });
  await PasswordReset.create({ email: user.email, otp, expiresAt });
  await sendOtpEmail({ email: user.email, otp });

  res.status(200).json(new ApiResponse(200, null, "OTP sent to your email"));
});

const resetPassword = asyncHandler(async (req, res) => {
  const { email, otp, newPassword } = req.body;

  if (!email?.trim() || !otp?.trim() || !newPassword?.trim()) {
    throw new ApiError(400, "Email, otp and new password are required");
  }

  if (newPassword.length < 6) {
    throw new ApiError(400, "Password must be at least 6 characters");
  }

  const resetEntry = await PasswordReset.findOne({
    email: email.toLowerCase(),
    otp,
  });
  if (!resetEntry || resetEntry.expiresAt < new Date()) {
    throw new ApiError(400, "Invalid or expired OTP");
  }

  const user = await findUserByEmail(email.toLowerCase());
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  user.password = newPassword;
  await user.save();
  await PasswordReset.deleteMany({ email: user.email });

  res
    .status(200)
    .json(new ApiResponse(200, null, "Password updated successfully"));
});

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  forgotPassword,
  resetPassword,
};
