const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/kavyaEngineers";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongose suiccess");
  });
};

module.exports = connectToMongo;
