const express = require("express");
const router = express.Router();
var bcrypt = require("bcrypt");
const users = require("../models/userschemas");
const { body, validationResult } = require("express-validator");

// router.get("/", (req, res) => {
//   console.log("Connected");
// });

router.post(
  "/register",
  body("name").isLength({ min: 5 }),
  body("email", "Please Enter Valid Email.").isEmail(),
  body("password", "Please Enter Password Length greater than 5.").isLength({
    min: 5,
  }),
  body("mobile", "Please Enter Valid 10 digit no.").isLength({ min: 10 }),

  async (req, res) => {
    //console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, mobile, address } = req.body;

    if (!name || !email || !password || !mobile || !address) {
      res.status(404).json("Plz fill the data.");
    }
    try {
      const prvuser = await users.findOne({ email: email });
      console.log(prvuser);

      if (prvuser) {
        res.status(404).json("Please Fill Right Information");
      } else {
        const adduser = new users({
          name,
          email,
          password,
          mobile,
          address,
        });

        await adduser.save();
        res.status(201).json(adduser);
        console.log(adduser);
      }
    } catch (error) {
      res.status(404).json(error);
    }
  }
);

//login user

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await users.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "Please login with correct creditials" });
    }
    //password check karaycha user ne takelea ani register krtana taklela password

    if (!password === user.password) {
      return res
        .status(400)
        .json({ error: "Please login with correct creditials" });
    } else {
      res.status(201).json(user);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error accuired");
  }
});

//Get user Data____________----------------------
router.get("/getdata", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(404).json(error);
  }
});

//get indivituall user

router.get("/getuser/:id", async (req, res) => {
  try {
    console.log(req.params);

    const { id } = req.params;
    const indivitualUser = await users.findById({ _id: id });
    console.log(indivitualUser);
    res.status(201).json(indivitualUser);
  } catch (error) {
    res.status(404).json(error);
  }
});

//update user data

router.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateduser);
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(420).json("fill data correct");
  }
});

//delete user

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteuser = await users.findByIdAndDelete({ _id: id });

    console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (error) {
    res.status(420).json(error);
  }
});

module.exports = router;
