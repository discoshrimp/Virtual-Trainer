const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("./Models/User");

passport.serializeUser((user, done) => {
  console.log("user in session: ", user);
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

//Defining the local strategy
passport.use(
  new localStrategy((userName, password, done) => {
    console.log("in locastrategy: ", userName, password);
    User.findOne({ userName: userName }, (err, response) => {
      console.log("the result: ", userName, err, response);
      if (!response) {
        console.log("Unautherized user");
        return done(null, false, { message: "Unautherized Username" });
      } else {
        console.log("in passport: ", response.password);
        let valid = response.checkPassword(password, response.password);
        if (valid) {
          console.log("valid: ", valid); //true
          return done(null, {
            userName: response.userName,
            password: response.password
          });
        } else if (valid !== true) {
          console.log("valid: ", valid); //false
          return done(null, false, { message: "Incorrect Password" });
        }
      }
      if (err) {
        console.log("in passport: ", err);
        done(err);
      }
    });
  })
);

module.exports = passport;
