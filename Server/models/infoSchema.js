const mongoose = require("mongoose");

const { Schema } = mongoose;

const infoSchema = new Schema({
  photo: {
    type: String,
    require: true,
  },
  ownername: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    rquire: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const info = new mongoose.model("Information", infoSchema);

module.exports = info;
