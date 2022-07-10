const mongoose = require("mongoose");
9;

const db =
  "mongodb+srv://omkar:omkarmirgane@cluster0.kdzhcyf.mongodb.net/PracticeApp?retryWrites=true&w=majority";

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection start"))
  .catch((error) => console.log(error.message));
