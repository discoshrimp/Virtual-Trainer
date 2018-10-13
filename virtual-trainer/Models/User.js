const mongoose= require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema(

	{
		Username: {type: String, required: true},
		//will be hashed
		password:{type: String, required: true},
		//twillo
		phoneNumber: {type: String, required: true},
		height: {type: String, required: true},
		weight: {type: String, required: true},
		age: {type: String, required: true},
		//not gender beacuse we need biological sex
		sex: {type: String, required: true},
		//users goal, either gain, lose, maintain
		goal: {type: String, required: true},
		//Rintake = Recommended Intake
		Rintake: {type: String, required: true}

	}
)
module.exports = mongoose.model("Food", FoodSchema);


const User = ("User", UserSchema)

module.exports = User

// UserModel
// weight
// height
// age
// sex
// goal: string (gain weight, maintain, lose)
// recommendedIntake: Number (reference with actualIntake)
// phoneNumber: String,
// username: String,
// password: