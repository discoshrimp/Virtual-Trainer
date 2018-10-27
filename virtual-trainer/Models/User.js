const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

//define user schema
const userSchema = new Schema({
  userName: {createIndex: true, type: String, required: true },
  password: { type: String, required: true },
  id: { type: String, required: false },
  age: { type: Number, required: false },
  sex: { type: String, required: false },
  weight: { type: Number, required: false },
  height: { type: Number, required: false },
  phoneNumber: String,
  goal: { type: String, required: false },
  recommendedIntake: [
    {
      type: Schema.Types.ObjectId,
      ref: "Food"
    }
  ]
});
// Define schema methods
userSchema.methods = {
  //Here the input password and the database password are compared for authentication
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  //First argument is to hash the password, the 2nd argument is to converted to an integer
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

//hashing a password before saving it to the database
userSchema.pre("save", function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

//export the mongoose model
module.exports = mongoose.model("User", userSchema);
