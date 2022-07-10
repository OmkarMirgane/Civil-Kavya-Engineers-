const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    rquire: true,
  },

  address: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const users = new mongoose.model("Customer", userSchema);

module.exports = users;
