const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define food schema
const foodSchema = new Schema({
	name: { type: String, required: true },
	calories: { type: Number, required: true },
	protein: Number,
	fat: Number,
	carbs: Number,
    actualIntake: { type: Number, required: true }

});

//export the mongoose model
module.exports = mongoose.model("Food", foodSchema);