const mongoose = require("mongoose");
require("dotenv").config();

/*DB connection string*/
// const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    console.error("Full Error:", error);
    process.exit(0);
  }
};

module.exports = {connectDB};
