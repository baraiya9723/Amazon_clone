const mongooes = require("mongoose");
require('dotenv').config();
const connectDb = async () => {
  try {
    const conn = await mongooes.connect(process.env.MONGO_URI);
    console.log("mongodb connected",`${conn.connection.host}`);
  } catch (err) {
    console.log(err.message, "err while connect with mongodb");
    process.exit(1)
  }
};
module.exports = connectDb
