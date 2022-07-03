const connectToMongo = require("./db");

const express = require("express");
const app = express();
const port = 5000;
connectToMongo();

//middleware for showing jsopn response
app.use(express.json());

// app.get("/api/user", (req, res) => {
//   res.send("Hello World!");
// });

//Available Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/addedinfo", require("./routes/addedinfo"));

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
