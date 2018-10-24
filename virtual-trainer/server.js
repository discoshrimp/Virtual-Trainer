const express = require("express");
// const Router = require('express').Router()
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const apiRoutes = require("./routes");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const morgan = require("morgan");

mongoose.Promise = global.Promise;
let MONGO_URL;
const MONGO_LOCAL_URL = "mongodb://localhost:27017/virtual-trainer";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
  MONGO_URL = process.env.MONGODB_URI;
} else {
  mongoose.connect(MONGO_LOCAL_URL); // local mongo url
  MONGO_URL = MONGO_LOCAL_URL;
}

// should mongoose.connection be put in the call back of mongoose.connect???
const db = mongoose.connection;
db.on("error", err => {
  console.log(`There was an error connecting to the database: ${err}`);
});
db.once("open", () => {
  console.log(
    `You have successfully connected to your mongo database: ${MONGO_URL}`
  );
});
// Define middleware here
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//routes required for authentication
app.use('/', apiRoutes);

//Sessions
app.use(
  session({
    secret: "rocking-group", //This is a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false, //required
    saveUninitialized: false //required
  })
);

//Passport
app.use(passport.initialize());
app.use(passport.session()); // Calls the deserializerUser

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
