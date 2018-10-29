import React, { Component } from 'react'
import API from '../../utils/apis'


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
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-m'>
						<p>this is where calories bar will go</p>
						{/* this is where the calorie counter guage will go */}
					</div>
					<div className='col-m'>
						{this.state.calories} <p>this is where calorie number will go</p>
						{/* this is where the number of calories will go, also could be floated on top of the progress bar */}
					</div>
				</div>
				<div className='row'>
					<div className='card'>
						<div className='card-body'>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item' id='carbs'>
									<p>this is carbs</p>
									{/* this is where carb will go */}
									{this.state.carbs}
								</li>
								<li className='list-group-item' id='protein'>
									<p>this is protein</p>
									{/* load protein data db */this.state.protein}
								</li>
								<li className='list-group-item' id='fat'>
									<p>this is fat</p>
									{/* load fat data from db */}
									{this.state.fat}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Dashboard