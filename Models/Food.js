const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define food schema
const foodSchema = new Schema({
	name: { createIndex: true, type: String },
	
	calories: { type: Number },
	
	protein: Number,
	
	fat: Number,
	
	carbs: Number,
	
	actualIntake: { type: Number },
	
	date:{type: Date, default: Date.now}

});

//export the mongoose model
module.exports = mongoose.model("Food", foodSchema);