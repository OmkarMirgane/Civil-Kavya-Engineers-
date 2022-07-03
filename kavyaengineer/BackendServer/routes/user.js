const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../Middleware/fetchuser");

//create user using:Post "/api/user".....Doesnt require authentication
///

//Juna code practice sathi kela hota
//navin codfe khali aahe
///
// router.post(
//   "/",
//   [
//     //bracket madhe validation lavayche//
//     body("email", "Enter valid Email").isEmail(),
//     // body("name").isLength({ min: 3 }),
//     //error ala tya veles maasege takaycha asel tneva
//     body("name", "Enter a valid name").isLength({ min: 5 }),

//     // body("password").isLength({ min: 5 }),
//     body("password", "Enter Valid Email").isLength({ min: 5 }),
//     body("contact", "ENter right contact no.").isLength({ min: 10, max: 11 }),
//   ],
//   (req, res) => {
//     //   let obj = {
//     //     a: "omkar",
//     //     number: 25,
//     //   };

//     //   res.send(obj);

//     //sending body

//     //asach lihle ahe usw nahi kele--const user = User(req.body);

//     //Direct data body send karaychi asel tnva
//     // user.save();
//     // console.log(req.body);

//     //res.send ne tya body cha output diste aplyala
//     // res.send(req.body);

//     //validation vaprun send krayachi asel tneva
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     User.create({
//       name: req.body.name,
//       email: req.body.email,
//       contact: req.body.contact,
//       password: req.body.password,
//     })
//       .then((user) => res.json(user))
//       .catch((err) => {
//         console.log(err);
//         res.json({
//           error: "please enter unique value for emaial",
//           massage: err.message,
//         });
//       });
//   }
// );

// module.exports = router;

//navin code

router.post(
  "/register", //eth bdala
  [
    //bracket madhe validation lavayche//
    body("email", "Enter valid Email").isEmail(),
    // body("name").isLength({ min: 3 }),
    //error ala tya veles maasege takaycha asel tneva
    body("name", "Enter a valid name").isLength({ min: 5 }),

    // body("password").isLength({ min: 5 }),
    body("password", "Enter Valid Email").isLength({ min: 5 }),
    body("contact", "ENter right contact no.").isLength({ min: 10, max: 11 }),
  ],

  //asyn kele he function
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //check karaych user agodr register ahe ka nahi email check kkrun karayche
      let user =
        await /*he async await unction ahe mnun await lgnar*/ User.findOne({
          email: req.body.email,
        });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry a user with this email already exist" });
      }

      //password hash sathi bcrypt.js install karaYCHE Te vrti require krayche ani ata tyachya method use krun password hashing karaycha
      let salt = await bcrypt.genSalt(10);
      const secretePassword = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        ///he vrti bcrypt mdhe lihil ahe password:req.body.password,
        password: secretePassword,
      });

      //jwt tocken sathi
      const data = {
        user: {
          id: user.id,
        },
      };
      const JWT_SECRETE = "SecreteKeyKvayaEngineers";
      const authtoken = await jwt.sign(data, JWT_SECRETE);
      console.log(authtoken);

      res.json({ authtoken });

      //jnvea jwt tocken  nhvte tya veles response bghnya sathi ---res.json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("some error accuired");
    }

    //async await madhe .then nahi vaoraycha
    // .then((user) => res.json(user))
    // .catch((err) => {
    //   console.log(err);
    //   res.json({
    //     error: "please enter unique value for emaial",
    //     massage: err.message,
    //   });
    // });

    //resoposnse send karaych
    // res.send(req.body);
  }
);

//login user

router.post(
  "/login",
  [
    body("email", "Enter a Valid Email-").isEmail(),
    body("password", "Password canot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please login with correct creditials" });
      }
      //password check karaycha user ne takelea ani register krtana taklela password
      const passwordCompare = await bcrypt.compare(password, user.password);

      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please login with correct creditials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const JWT_SECRETE = "SecreteKeyKvayaEngineers";
      const authtoken = jwt.sign(data, JWT_SECRETE);
      console.log(authtoken);

      res.json({ authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error accuired");
    }
  }
);

///logged in user che details dakhjvnya sathi
router.post(
  "/getuser",

  //he lagat nahi // [
  //   body("email", "Enter a valid Email").isEmail(),
  //   body("password", "Password should not blank"),
  // ],
  //middleware cha   use karaycha
  fetchuser,
  async (req, res) => {
    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error accuired");
    }
  }
);

module.exports = router;
