import React, { Component } from "react";
import API from "../../utils/apis";
import { Redirect } from "react-router-dom";
import Dashboard from "../Dashboard";

class Nutrition extends Component {
  initialState = {
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
    ingredients: [],
    RecipeTitle: ""
  };

  state = {
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
    ingredients: [],
    RecipeTitle: ""
  };

  handleTitleInput = event => {
    this.setState({ RecipeTitle: event.target.value });
  };
  handleIngInput = event => {
    this.setState({ ingredients: event.target.value.split(",") });
  };

  handleNutrition = event => {
    event.preventDefault();
    console.log(this.state);
    API.NutritionBreakdown({
      title: this.state.RecipeTitle,
      ingr: this.state.ingredients
    }).then(response => {
      console.log(`nutrients: ${JSON.stringify(response)}`);
    });
    window.location.reload();
  };
  handleRedirect = event => {
    console.log(`dashboard clicked`);
    this.setState({ redirectTo: "/dashboard" });
  };
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
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
        <Dashboard />
      </div>
    );
  }
}

export default Nutrition;
