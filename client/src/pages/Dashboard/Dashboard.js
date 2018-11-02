import React, { Component } from 'react'
import API from '../../utils/apis'

import { Redirect } from "react-router-dom"

class Dashboard extends Component {

	initialState = {
		calories: 0,
		carbs: 0,
		protein: 0,
		fat: 0,
	}
	state = {
		calories: 0,
		carbs: 0,
		protein: 0,
		fat: 0,
	}
	returnedData = undefined
	componentDidMount = () => {
		API.getFood()
			.then(data => {
				this.returnedData = (data.data)
				console.log(`returned data: ${JSON.stringify(this.returnedData)}\n--------\nlength: ${this.returnedData.length}`)
				for (var i = 0; i < this.returnedData.length; i++) {
					this.setState({ calories: + this.returnedData[i].calories, carbs: + this.returnedData[i].carbs, protein: + this.returnedData[i].protein, fat: + this.returnedData[i].fat })
					this.initialState.calories += this.state.calories
					this.initialState.carbs += this.state.carbs
					this.initialState.protein += this.state.protein
					this.initialState.fat += this.state.fat
				}
				console.log(`initialState after for loop: ${JSON.stringify(this.initialState)}`)
				this.setState(this.initialState)
				this.initialState.calories = 0
				this.initialState.protein = 0
				this.initialState.carbs = 0
				this.initialState.fat = 0
			}).then(() => {
				console.log(`initialState after setting to state and clearing: ${JSON.stringify(this.initialState)}\n--------\nstate: ${JSON.stringify(this.state)}`)
			})
	}
	handleClick = event=>{
		console.log('button clicked')
		this.setState({redirectTo: '/nutrition'})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />;
		}
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-m'>
						<p>Calories Consumed Today: {this.state.calories}</p>
						{/* this is where the calorie counter guage will go */}
					</div>
				</div>
				<div className='row'>
					<div className='card'>
						<div className='card-body'>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item' id='carbs'>
									<p>Total Carbohydrates</p>
									{/* this is where carb will go */}
									{this.state.carbs}
								</li>
								<li className='list-group-item' id='protein'>
									<p>Total Protein</p>
									{/* load protein data db */this.state.protein}
								</li>
								<li className='list-group-item' id='fat'>
									<p>Total Fat</p>
									{/* load fat data from db */}
									{this.state.fat}
								</li>
							</ul>
						</div>
					</div>
					<div className ='col'>
					<button className ='btn btn-large' to='/nutrition' onClick = {this.handleClick}>Nutrition</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard