const mongoose = require("mongoose");
const { Schema } = mongoose;

const addedinfoSchema = new Schema({
  user: {
    //eth tya user mdhun id sathi specific asa user yeto
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    require: true,
  },
  addresse: {
    type: String,
    require: true,
  },
  propertyvalue: {
    type: Number,
  },
  photo: {
    type: String,
    require: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
//direct module export krtana ase karayche
//module.exports = mongoose.model("user", userSchema);

//module export krtana tyacha sarkhi same database mdhe jau naye mnun he createIndex use krayche tyane duplicate database mdhe nahi jat=====//User.createIndexes();
const Addedinfo = mongoose.model("AddedInformation", addedinfoSchema);

//Tikde user.js route mdhe async await mdhe condioton takli mnun index deychgi kahi garj nahi
//createIndexes tya pratek emai9l la unique id deta yeto

module.exports = Addedinfo;
