const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/VisitorsRegistration";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(console.log("coneected successfully"));
};

module.exports = connectToMongo;
