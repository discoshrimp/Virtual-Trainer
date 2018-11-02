const express = require("express");
// const Router = require('express').Router()
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo")(session);
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const apiRoutes = require("./routes/apiRoutes");
const auth = require("./routes/auth");


mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);

let MONGO_URL;
const MONGO_LOCAL_URL = "mongodb://localhost:27017/virtual-trainer";
mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
  MONGO_URL = process.env.MONGODB_URI;
} else {
  mongoose.connect(MONGO_LOCAL_URL); // local mongo url
  MONGO_URL = MONGO_LOCAL_URL;
}

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
app.use(cookieParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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

//routes
app.use("/", apiRoutes);
app.use("", apiRoutes);
app.use("/auth", auth);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
