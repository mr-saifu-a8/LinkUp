const mongoose = require("mongoose");
const User = require("../models/User");

const connectDB = async () => {
  try {
    const mongoUri =
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/linkup";
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error.message);
    process.exit(1);
  }
};

const findUserByEmail = async (email) => User.findOne({ email });

const createUser = async ({ email, password, name }) => {
  const user = await User.create({ email, password, name });
  return user;
};

module.exports = {
  connectDB,
  findUserByEmail,
  createUser,
};
