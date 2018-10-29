const express = require("express");
const controllers = require("../controllers/controllers");
const router = express.Router();
const request = require("request");
const path = require("path");


router.get("/food", controllers.findAllFood);

router.get('/dailyprogress', controllers.findDateFood)

router.post("/food", controllers.createFood);

router.delete("/food/:id", controllers.deleteFood);

router.get("/articles", (req, res) => {
	const authKey = "462a94997e72401b92d8f11524378eba";
	const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
		${authKey}&${topic}`;
	request.post(queryURL, (error, response, data) => {
		res.send(JSON.parse(data).response.docs);
	});
})

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

module.exports = router;
