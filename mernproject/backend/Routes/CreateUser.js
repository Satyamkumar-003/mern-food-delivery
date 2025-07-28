const express = require("express");
const router = express.Router();
// imported user.js where we have store the user requirement to fill
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const jwt =require("jsonwebtoken");
const bcrypt= require("bcryptjs");
const jwtSeceret="Mynameissatyamkumariamdeveloper"
//when this end point will the data will go mongodb
router.post(
  "/createuser",
  [
    body("email", "Incorrect Email").isEmail(),
    // body("name").isLength({ min: 5 }),
    body("password", "Incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // validating the thing that email is present or not , so on
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const salt=await bcrypt.genSalt(10);
    let secPassword=await bcrypt.hash(req.body.password,salt)
    try {
      //here we are sending the data to user, data can be form any where
      await User.create({
        // here first i make the static data and put in the db using the router and then now i am using body to form where i will get data and put in database
        // static
        // name:req.body.name,
        // password:"123456",
        // email:"satyam123@gmail.com",
        // location:"patiala"
        name: req.body.name,
        password: secPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email", "Incorrect Email").isEmail(),
    body("password", "Incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

   //  const user = await User.findOne({ email: req.body.email });

   //  // ❌ If user doesn't exist
   //  if (!user) {
   //      return res.status(400).json({ success: false, message: 'User not found' });
   //  }

   //  // ✅ Compare plain text passwords
   //  if (user.password !== req.body.password) {
   //      return res.status(400).json({ success: false, message: 'Incorrect password' });
   //  }

   //  // ✅ Successful login
   //  res.json({ success: true });
   let email = req.body.email;
try {
  let userData = await User.findOne({ email: email });
  if (!userData) {
    return res.status(400).json({ errors: "try login with correct credentials" });
  }

  const pwdCompare=await bcrypt.compare(req.body.password,userData.password)

  if (!pwdCompare) {
    return res.status(400).json({ errors: "try login with correct credentials" });
  }

  const data={
   user:{
      id:userData.id
   }
  }
  // for the authentication part 
  // as help to compare the brycpt data with the original data 
  // make it secure and safe
  const authToken=jwt.sign(data,jwtSeceret)
  res.json({ success: true,authToken:authToken });
} catch (error) {
  console.log(error);
  res.json({ success: false });
}


   //  let email = req.body.email;
   //  try {
   //    let userData = await User.findOne(email);
   //    if (!userData) {
   //      return res
   //        .status(400)
   //        .json({ errors: "try login with correct credentials" });
   //    }

   //    if (!req.body.password == userData.password) {
   //      return res
   //        .status(400)
   //        .json({ errors: "try login with correct credentials" });
   //    }
   //    res.json({ success: true });
   //  } catch (error) {
   //    console.log(error);
   //    res.json({ success: false });

      
    });

module.exports = router;
