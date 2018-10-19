import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      age: "",
      sex: "",
      weight: "",
      height: "",
      phoneNumber: "",
      goal: "",
      recommendedIntake: ""
    };
    //To keep the value of the input bocxes to always be current with 'state'
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("SignUp form: ", this.state.username);
    //request to server code goes
  };
  render() {
    return (
      <div className="SignupForm">
        <h4>Sign Up</h4>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="username">
                Username
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="password">
                Password
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirm password"
                value={this.state.confirmPassword}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="age">
                Age
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="age"
                name="age"
                placeholder="age"
                value={this.state.age}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="gender">
                Gender
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="gender"
                name="gender"
                placeholder="gender"
                value={this.state.gender}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="weight">
                Weight
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="weight"
                name="weight"
                placeholder="weight(lb)"
                value={this.state.weight}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="height">
                Height
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="height"
                name="height"
                placeholder="height(in feet)"
                value={this.state.height}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="phonenumber">
                Phone number
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="phonenumber"
                name="phonenumber"
                placeholder="phone number"
                value={this.state.phonenumber}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="goal">
                Goal
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <textarea
                className="form-input"
                type="text"
                id="goal"
                name="goal"
                placeholder="goal"
                value={this.state.goal}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-1 col-ml-auto">
              <label className="form-label" htmlFor="recommendedIntake">
                Recommended Intake
              </label>
            </div>
            <div className="col-3 col-mr-auto">
              <textarea
                className="form-input"
                type="text"
                id="recommendedIntake"
                name="recommendedIntake"
                placeholder="recommended intake"
                value={this.state.recommendedIntake}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-7" />
            <button
              className="btn btn-primary col-1 col-mr-auto"
              onClick={this.handleFormSubmit}
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
