import React, {Component} from 'react'
import API from '../../utils/apis'


class Nutrition extends Component{
initialState = {
	calories: 0,
	fat: 0,
	carbs: 0,
	protein: 0,
	ingredients: [],
	RecipeTitle:"",

}

state = {
	calories: 0,
	fat: 0,
	carbs: 0,
	protein: 0,
	ingredients: [],
	RecipeTitle:"",
}
handleInputChange = (name, value) =>{
	const name =event.target.name
	const value = event.target.value
	this.setState({
		[name]: value
	})

}
handleNutrition = ()=>{
	axios.post('/edamam', {
		title: this.state.RecipeTitle,
		ingr: this.state.ingredients
	}).then( response=>{
		console.log(response)
		//send response to dashboard

		//send response to database
	}).catch( err=>{
		console.log(err)
	})

	this.setState(this.initialState)
}

render(){
	return(
<form>
	<div className='form-group'>
		<label for  = 'recipeName'>Name of Recipe</label>
		<input type='text' className='form-control' id='recipeName' onChange={this.handleInputChange}></input>
	</div>
	<div className='form-group'>
	<label for='ingredients'>Ingredients</label>
	<input type='text' className ='form-control' id='ingredients' onChange={this.handleInputChange}></input>
	</div>
	<button className='btn btn-primary btn-large' onClick={this.handleNutrition}>Submit</button>
</form>
	)
}

}

export default Nutrition