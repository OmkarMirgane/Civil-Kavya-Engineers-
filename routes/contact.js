const express = require("express");
const contactdata = express.Router();
const info = require("../models/infoSchema");
const contactinfo = require("../models/contactSchemas");
const { body, validationResult } = require("express-validator");

contactdata.post(
  "/contactinfo",
  body("name").isLength({ min: 5 }),
  body("email", "Please Enter Valid Email.").isEmail(),
  body("mobile", "Please Enter Valid 10 digit no.").isLength({ min: 10 }),
  body("description").isLength({ min: 2 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    const { name, email, mobile, description } = req.body;

    if (!name || !email || !mobile || !description) {
      res.status(404).json("Plz fill the data.");
    }

    const newContactinfo = new contactinfo({
      name,
      email,
      mobile,
      description,
    });

    await newContactinfo.save();
    res.status(201).json(newContactinfo);
    console.log(newContactinfo);
  }
);

module.exports = contactdata;
