const express = require("express");
const controllers = require("../controllers/controllers");
const router = express.Router();
const request = require("request");
const path = require("path");
const db = require("../Models/User");

router.get("/food", controllers.findAllFood);

router.get("/dailyprogress", controllers.findDateFood);

router.post("/food", controllers.createFood);

router.delete("/food/:id", controllers.deleteFood);

router.get("/articles", (req, res) => {
  const authKey = "462a94997e72401b92d8f11524378eba";
  const queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey +
    "&q=Weightloss";
  request.get(queryURL, (error, response, data) => {
    res.send(JSON.parse(data).response.docs);
  });
});

router.post("/edamam", (req, res) => {
  console.log("request:", req.body);
  const app_key = "88aaf88bd591b1d07bffc2ee29030aa5";
  const app_id = "e5ea3d28";
  const edamam = `http://api.edamam.com/api/nutrition-details?app_id=${app_id}&app_key=${app_key}`;
  request.post(
    {
      headers: "Content-Type: application/json",
      url: edamam,
      body: req.body
    },
    (err, response, body) => {
      console.log("response", body);
      res.json(body);
    }
  );
});

//===========Authentication===========
const loggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
};
router.get("/login", (req, res) => {
  res.redirect;
});

// router.get("/home", loggedIn, (req, res, next) => {
//   res.send(req.session);
// });

router.get("/profile/:user", controllers.getProfile);

router.post("/signup", controllers.createUser);

router.post("/signup/:user", controllers.updateUser);

router.get("/signup/:username", controllers.deleteUser);

module.exports = router;
