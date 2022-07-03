const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  contact: {
    type: Number,
  },
  password: {
    type: String,
    require: true,
  },
  checkbox: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
//direct module export krtana ase karayche
//module.exports = mongoose.model("user", userSchema);

//module export krtana tyacha sarkhi same database mdhe jau naye mnun he createIndex use krayche tyane duplicate database mdhe nahi jat
const User = mongoose.model("user", userSchema);

//Tikde user.js route mdhe async await mdhe condioton takli mnun index deychgi kahi garj nahi
//createIndexes tya pratek emai9l la unique id deta yeto
//User.createIndexes();
module.exports = User;
