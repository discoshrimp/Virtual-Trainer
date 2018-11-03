const express = require("express");
const controllers = require("../controllers/controllers");
const router = express.Router();
const request = require("request");
const path = require("path");
const db = require("../Models/User");

router.get("/food", controllers.findAllFood);

router.get("/dailyprogress", controllers.findDateFood);

router.post("/newfood", controllers.createFood);

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

// router.get("/signup/:username", controllers.deleteUser);
router.get("/api/savearticles", controllers.findArticle);

router.post("/api/savearticles", controllers.createArticle);

router.delete("/api/savearticles/:id", controllers.deleteArticle);
router.get("/api/food", controllers.findAllFood);

router.post("/api/food", controllers.createFood);

router.delete("/api/food/:id", controllers.deleteFood);

router.get("/api/users/:id", controllers.findOneUser);

router.post("/api/users", controllers.createUser);

router.post("/signup", controllers.createUser);

module.exports = router;
