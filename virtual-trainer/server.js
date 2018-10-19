const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
//Dependencies for authentication
const passport = require("passport");
const session = require("express-session");
// const MongoStore = require("connect-mongo")(session);
const morgan = require("morgan");
const db = process.env.MONGODB_URI || "mongodb://localhost/virtual-trainer";
mongoose.connect(db, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.log("Database connected successfull!");
  }
});


// Define middleware here
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
// app.use("/api", apiRoutes);

//routes required for authentication
app.use("/", apiRoutes);
//Sessions
app.use(
  session({
    secret: "rocking-group", //This is a random string to make the hash that is generated secure
    // store: new MongoStore({ mongooseConnection: db }),
    resave: false, //required
    saveUninitialized: false //required
  })
);

//Passport
app.use(passport.initialize());
app.use(passport.session()); // Calls the deserializerUser

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
