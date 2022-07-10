const express = require("express");
const rent = express.Router();
const rentinfo = require("../models/rentSchema");
const { body, validationResult } = require("express-validator");

rent.post(
  "/addrentinfo",
  body("ownername").isLength({ min: 5 }),
  body("rooms").isLength({ min: 2 }),
  body("mobile", "Please Enter Valid  10 digit no.").isLength({ min: 1 }),
  body("address").isLength({ min: 5 }),
  body("description").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    const { photo, ownername, rooms, mobile, address, description } = req.body;

    if (!photo || !ownername || !rooms || !mobile || !address || !description) {
      res.status(404).json("Plz fill the data.");
    }

    const addrentinfo = new rentinfo({
      photo,
      ownername,
      rooms,
      mobile,
      address,
      description,
    });

    await addrentinfo.save();
    res.status(201).json(addrentinfo);
    console.log(addrentinfo);
  }
);

//get data
rent.get("/getrentInfo", async (req, res) => {
  try {
    const infodata = await rentinfo.find();
    res.status(201).json(infodata);
    console.log(infodata);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = rent;
