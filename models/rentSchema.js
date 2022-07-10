const mongoose = require("mongoose");

const { Schema } = mongoose;

const rentSchema = new Schema({
  photo: {
    type: String,
    require: true,
  },
  ownername: {
    type: String,
    require: true,
  },
  rooms: {
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

const rentinfo = new mongoose.model("RentInformation", rentSchema);

module.exports = rentinfo;
