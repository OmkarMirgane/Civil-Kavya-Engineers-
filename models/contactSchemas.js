const mongoose = require("mongoose");

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    rquire: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const contactinfo = new mongoose.model("contactData", contactSchema);

module.exports = contactinfo;
