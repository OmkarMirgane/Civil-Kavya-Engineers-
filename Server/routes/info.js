const express = require("express");
const addInfo = express.Router();
const info = require("../models/infoSchema");
const { body, validationResult } = require("express-validator");

addInfo.post(
  "/addinfo",
  body("ownername").isLength({ min: 5 }),
  body("price").isLength({ min: 2 }),
  body("mobile", "Please Enter Valid  10 digit no.").isLength({ min: 1 }),
  body("address").isLength({ min: 5 }),
  body("description").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    const { photo, ownername, price, mobile, address, description } = req.body;

    if (!photo || !ownername || !price || !mobile || !address || !description) {
      res.status(404).json("Plz fill the data.");
    }

    const addinfo = new info({
      photo,
      ownername,
      price,
      mobile,
      address,
      description,
    });

    await addinfo.save();
    res.status(201).json(addinfo);
    console.log(addinfo);
  }
);

//get data
addInfo.get("/getInfo", async (req, res) => {
  try {
    const infodata = await info.find();
    res.status(201).json(infodata);
    console.log(infodata);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = addInfo;
