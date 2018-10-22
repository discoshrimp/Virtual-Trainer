const express = require("express");
const controllers = require("../controllers/controllers");
const router = express.Router();
const request = require("request");
const path = require("path");

router.get("/api/food", controllers.findAllFood);

router.post("/api/food", controllers.createFood);

router.delete("/api/food/:id", controllers.deleteFood);

router.get("/api/users", controllers.findAllUsers);

router.get("/api/users/:id", controllers.findOneUser);

router.post("/api/users", controllers.createUser);

router.post("/signup", controllers.createUser);

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

module.exports = router;
