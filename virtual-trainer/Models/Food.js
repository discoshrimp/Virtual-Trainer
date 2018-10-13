var mongoose = require("mongoose");

//define food schema
var FoodSchema = new mongoose.Schema({
	name:{type: String, required: true},
	calories:{type: Number,  required: true},
	protein: {type: Number,  required: true},
	fat: {type: Number,  required: true},
	carbs: {type:Number,  required: true},
    actualIntake:{type: Number,  required: true}

});


const Food = ('Food', FoodSchema)

module.exports = Food