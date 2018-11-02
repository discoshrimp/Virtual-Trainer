const express = require("express");
const controllers = require("../controllers/controllers");
const router = express.Router();
const request = require("request");
const path = require("path");


router.get("/food", controllers.findAllFood);

router.get('/dailyprogress', controllers.findDateFood)

router.post("/food", controllers.createFood);

router.delete("/food/:id", controllers.deleteFood);


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

router.get("/home", loggedIn, (req, res, next) => {
  res.send(req.session);
});

router.post("/signup", controllers.createUser);
router.post("/signup/:user", controllers.updateUser);

router.get("/api/savearticles", controllers.findArticle);
router.post("/api/savearticles", controllers.createArticle);
router.delete("/api/savearticles/:id", controllers.deleteArticle);


module.exports = router;
