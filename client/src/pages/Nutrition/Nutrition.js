import React, { Component } from "react";
import API from "../../utils/apis";

class Nutrition extends Component {
  state = {
    user: "",
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
    ingredients: [],
    RecipeTitle: "",
    MenuNutrient: {}
  };

  componentDidMount() {
    this.getSessionData();
  }

  handleTitleInput = event => {
    this.setState({ RecipeTitle: event.target.value });
  };
  handleIngInput = event => {
    this.setState({ ingredients: event.target.value.split(",") });
  };

  getSessionData = username => {
    console.log("user passed in nutrition: ", username);
    API.getUser(username).then(response => {
      this.setState({ user: response.data.user });
    });
    console.log("user in nutrition: ", this.response);
  };

  handleNutrition = event => {
    event.preventDefault();
    console.log(this.state);
    let nutritionToBeSaved = {
      user: this.state.user,
      title: this.state.RecipeTitle,
      ingr: this.state.ingredients
    };
    console.log("New nutrition: ", nutritionToBeSaved);
    API.NutritionBreakdown(nutritionToBeSaved).then(response => {
      console.log("nutrition breakdown: ", response.data);
      this.setState({ MenuNutrient: response.data });
    });
  };

  render() {
    return (
      <div className="container nutritionForm">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="recipeName"
              value={this.state.RecipeTitle}
              placeholder="Enter the recipe "
              onChange={this.handleTitleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="ingredients"
              value={this.state.ingredients}
              placeholder="Ingredients(in oz)"
              onChange={this.handleIngInput}
            />
          </div>
          <button className="btn btn-default" onClick={this.handleNutrition}>
            Submit
          </button>
        </form>
        {/* <Dashboard /> */}
        <div className="container dashboardForm">
          <div className="row">
            <div className="col-m calorieDisplay">
              <p>
                Calories for {this.state.MenuNutrient.name} is
                {this.state.MenuNutrient.calories}
              </p>
              {/* this is where the calorie counter guage will go */}
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item" id="carbs">
                    <p>Total Carbohydrates: {this.state.MenuNutrient.carbs}</p>
                  </li>
                  <li className="list-group-item" id="protein">
                    <p>Total Protein: {this.state.MenuNutrient.protein}</p>
                  </li>
                  <li className="list-group-item" id="fat">
                    <p>Total Fat: {this.state.MenuNutrient.fat}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nutrition;
