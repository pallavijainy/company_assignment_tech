require("dotenv").config();
const mongoose  = require("mongoose");

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connected successfully");
    } catch (error) {
        console.log("Error connecting to database");
    }
};

module.exports = connectDB;