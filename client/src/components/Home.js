import React, { Component } from "react";
import API from "../utils/apis";
import Dashboard from "../pages/Dashboard";

class Home extends Component {
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
    fat: 0,
    mealDetail: []
  };
  componentDidMount() {
    API.getTotalCalorie()
      .then(data => {
        this.returnedData = data.data;
        this.setState({ mealDetail: data.data });
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
  }

  renderMenuDetail = () => {
    return this.state.mealDetail.map(meal => (
      <Dashboard
        _id={meal._id}
        key={meal._id}
        name={meal.name}
        calories={meal.calories}
        carbs={meal.carbs}
        protein={meal.protein}
        fat={meal.fat}
      />
    ));
  };

  render() {
    return (
      <div className="container home">
        <div className="display-dashboard">
          <h4>{new Date().toLocaleDateString()} Food Diary</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Meal</th>
                <th scope="col">Calories</th>
                <th scope="col">Carbohydrates</th>
                <th scope="col">Protein</th>
                <th scope="col">Fat</th>
              </tr>
            </thead>
            <tbody>{this.renderMenuDetail()}</tbody>
            <tfoot>
              <tr>
                <th scope="row">Total</th>
                <th scope="row">{this.state.calories.toFixed(2)} kcal</th>
                <th scope="row">{this.state.carbs.toFixed(2)} g</th>
                <th scope="row">{this.state.protein.toFixed(2)} g</th>
                <th scope="row">{this.state.fat.toFixed(2)} g</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="quotes">
          <h1>
            "To insure good health: eat lightly, breathe deeply, live
            moderately, cultivate cheerfulness, and maintain an interest in
            life.” – William Londen
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
