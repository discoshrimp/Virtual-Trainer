const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define user schema
const userSchema = new Schema({
	userName: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    sex: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    phoneNumber: String,
    goal: { type: String, required: true },
    recommendedIntake:[{
		type: Schema.Types.ObjectId, ref: "Food",
	}]
	
});

//export the mongoose model
module.exports = mongoose.model("User", userSchema);

