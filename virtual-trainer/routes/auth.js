const express = require("express");
const router = express.Router();
const passport = require("../passport");
const User = require("../Models/User");

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("in pass auth: ", req.user, req.session);
  const user = JSON.parse(JSON.stringify(req.user));
  const cleanUser = Object.assign({}, user);
  delete cleanUser.password;
  res.json({ user: cleanUser });
});

router.get(`/login`, (req, res) => {
  console.log("get session: ", req.user);
  const newUser = req.user.userName;
  console.log("passed user:", newUser);
  res.json({ user: newUser });
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.session.destroy();
    res.clearCookie("connect.sid");
    return res.json({ msg: "Logging out :(" });
  } else {
    return res.json({ msg: "No user to log out" });
  }
});

module.exports = router;
