import React, { Component } from "react";
import API from "../../utils/apis";

class Dashboard extends Component {
  initialState = {
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0
  };
  state = {
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0
  };
  returnedData = undefined;
  componentDidMount = () => {
    API.getFood()
      .then(data => {
        this.returnedData = data.data;
        console.log(
          `returned data: ${JSON.stringify(
            this.returnedData
          )}\n--------\nlength: ${this.returnedData.length}`
        );
        for (var i = 0; i < this.returnedData.length; i++) {
          this.setState({
            calories: +this.returnedData[i].calories,
            carbs: +this.returnedData[i].carbs,
            protein: +this.returnedData[i].protein,
            fat: +this.returnedData[i].fat
          });
          this.initialState.calories += this.state.calories;
          this.initialState.carbs += this.state.carbs;
          this.initialState.protein += this.state.protein;
          this.initialState.fat += this.state.fat;
        }
        console.log(
          `initialState after for loop: ${JSON.stringify(this.initialState)}`
        );
        this.setState(this.initialState);
        this.initialState.calories = 0;
        this.initialState.protein = 0;
        this.initialState.carbs = 0;
        this.initialState.fat = 0;
      })
      .then(() => {
        console.log(
          `initialState after setting to state and clearing: ${JSON.stringify(
            this.initialState
          )}\n--------\nstate: ${JSON.stringify(this.state)}`
        );
      });
  };

  render() {
    return (
      <div className="container dashboardForm">
        <div className="row">
          <div className="col-m calorieDisplay">
            <p>Calories Consumed: {this.state.calories.toFixed(2)}</p>
            {/* this is where the calorie counter guage will go */}
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item" id="carbs">
                  <p>Total Carbohydrates: {this.state.carbs.toFixed(2)}</p>
                </li>
                <li className="list-group-item" id="protein">
                  <p>Total Protein: {this.state.protein.toFixed(2)}</p>
                </li>
                <li className="list-group-item" id="fat">
                  <p>Total Fat: {this.state.fat.toFixed(2)}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
