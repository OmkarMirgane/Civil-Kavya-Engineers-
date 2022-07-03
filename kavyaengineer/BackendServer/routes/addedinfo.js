const express = require("express");
const router = express.Router();
const fetchuser = require("../Middleware/fetchuser");
const Addedinfo = require("../Models/Addedinfo");
const user = require("./user");
const { body, validationResult } = require("express-validator");

//Route 1:Get all information using GET '/api/addedinfo/getinfo.....Login Required

router.get("/getinfo", fetchuser, async (req, res) => {
  try {
    const addinfo = await Addedinfo.find({ user: req.user.id });
    res.json(addinfo);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error accuired");
  }
});

//Route 2:added info "/api/addedinfo/addinfo"
router.post("/addinfo", fetchuser, async (req, res) => {
  try {
    const { name, addresse, photo, propertyvalue } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const addedinfo = new Addedinfo({
      name,
      addresse,
      photo,
      propertyvalue,
      user: req.user.id,
    });
    const saveAddedinfo = await addedinfo.save();
    console.log(saveAddedinfo);

    res.json(saveAddedinfo);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error accuired");
  }
});

//Router3:Put request for updating information
router.put("/updateinfo/:id", fetchuser, async (req, res) => {
  const { name, addresse, propertyvalue, photo } = req.body;
  try {
    // Create a newAddedinfo object
    const newAddedinfo = {};
    if (name) {
      newAddedinfo.name = name;
    }
    if (addresse) {
      newAddedinfo.addresse = addresse;
    }
    if (propertyvalue) {
      newAddedinfo.propertyvalue = propertyvalue;
    }
    if (photo) {
      newAddedinfo.pphoto = photo;
    }

    // Find the note to be updated and update it

    let information = await Addedinfo.findById(req.params.id);
    if (!information) {
      /*Check karaych id ahe ka nahi available */
      return res.status(404).send("Not Found");
    }
    /*Ha aplyala tya information id related user deta deto */
    if (information.user.toString() !== req.user.id) {
      //tya id related user ahe ka nahi ani to juser tyachi informatin nupdate krto ka he vr check krto
      return res.status(401).send("Not Allowed");
    }
    information = await Addedinfo.findByIdAndUpdate(
      req.params.id,
      { $set: newAddedinfo },
      { new: true }
    );
    res.json({ information });
    console.log(information);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//Router 4:Delete information from database
router.delete("/deleteInfo/:id", fetchuser, async (req, res) => {
  try {
    // Find the information to be delete and delete it
    let addedinfo = await Addedinfo.findById(req.params.id);
    if (!addedinfo) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user owns this Note
    if (addedinfo.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    addedinfo = await Addedinfo.findByIdAndDelete(req.params.id);
    res.json({ Success: "Information has been deleted", addedinfo: addedinfo });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
