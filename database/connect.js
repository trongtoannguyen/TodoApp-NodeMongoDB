const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
function connect() {
  mongoose.connect(uri).catch((err) => handleError(err));
}

module.exports = { connect };
