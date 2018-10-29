const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const date = new Date()
// const date = date.getDate()
// const month =date.getMonth()
// const year = date.getFullYear()
// const useDate = `${month}/${date}/${year}`
//define food schema
const foodSchema = new Schema({
	name: {createIndex: true, type: String, required: true },
	
	calories: { type: Number, required: true },
	
	protein: Number,
	
	fat: Number,
	
	carbs: Number,
	
	date:{ type: Date, default: Date.now}

});

//export the mongoose model
module.exports = mongoose.model("Food", foodSchema);