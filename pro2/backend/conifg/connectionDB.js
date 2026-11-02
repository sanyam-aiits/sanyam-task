const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    console.log("test-1");
    await mongoose.connect("mongodb+srv://aigcredential_db_user:YvgGChvQeHP4aCn9@ranchi-website.eoad11u.mongodb.net/TaskEcom");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
