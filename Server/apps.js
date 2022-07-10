const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const users = require(".//models/userschemas");
//error yenare yeu nasye mnun cors install karaych
const cors = require("cors");

//router import
const router = require("./routes/router");
const addInfo = require("./routes/info");
const contactdata = require("./routes/contact");
const rent = require("./routes/rent");

require("./DB/conn");
const port = 8000;

app.use(cors());
app.use(express.json());

app.use(router);
app.use(addInfo);
app.use(contactdata);
app.use(rent);

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
