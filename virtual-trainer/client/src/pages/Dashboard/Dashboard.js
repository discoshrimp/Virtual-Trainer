import React,  { Component } from 'react'
import API from '../../utils/apis'


class Dashboard extends Component {

	initialState = {
		calories:0,
		carbs:0,
		protein:0,
		fat:0,
	}
	state = {
		calories:0,
		carbs:0,
		protein:0,
		fat:0,
	}

	handleInfo = ()=>{
		API.getFood()
		console.log(API.getFood)
	}
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-m'>
						{/* this is where the calorie counter guage will go */}
					</div>
					<div className='col-m'>
						{/* this is where the number of calories will go, also could be floated on top of the progress bar */}
					</div>
				</div>
				<div className='row'>
					<div className='card'>
						<div className='card-body'>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item' id='carbs'>
									{/* load carb data from db */}
								</li>
								<li className='list-group-item' id='protein'>
									{/* load protein data db */}
								</li>
								<li className='list-group-item' id='fat'>
									{/* load fat data from db */}
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