import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/apis";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      age: "",
      gender: "",
      weight: "",
      height: "",
      phoneNumber: "",
      goal: "",
      recommendedIntake: "",
      redirectTo: null
    };
    //To keep the value of the input boxes to always be current with 'state'
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleGoalChange = this.handleGoalChange.bind(this);
    this.handleRecommendedIntakeChange = this.handleRecommendedIntakeChange.bind(
      this
    );
  }

  handleAgeChange = event => {
    this.setState({ age: event.target.value });
  };
  handleGenderChange = event => {
    this.setState({ gender: event.target.value });
  };
  handleWeightChange = event => {
    this.setState({ weight: event.target.value });
  };
  handleHeightChange = event => {
    this.setState({ height: event.target.value });
  };
  handlePhoneNumberChange = event => {
    this.setState({ phoneNumber: event.target.value });
  };
  handleGoalChange = event => {
    this.setState({ goal: event.target.value });
  };
  handleRecommendedIntakeChange = event => {
    this.setState({ recommendedIntake: event.target.value });
  };

  componentDidMount() {
    this.getSessionData();
  }

  getSessionData = username => {
    API.getUser(username).then(response => {
      this.setState({ user: response.data.user });
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.age ||
      this.state.gender ||
      this.state.weight ||
      this.state.height ||
      this.state.phoneNumber ||
      this.state.goal ||
      this.state.recommendedIntake !== ""
    ) {
      //request to server code goes
      let userInfoToBeSaved = {
        user: this.state.user,
        age: this.state.age,
        gender: this.state.gender,
        weight: this.state.weight,
        height: this.state.height,
        phoneNumber: this.state.phoneNumber,
        goal: this.state.goal,
        recommendedIntake: this.state.recommendedIntake
      };
      console.log("new User: ", userInfoToBeSaved);

      API.updateUser(userInfoToBeSaved)
        .then(response => {
          console.log("response: ", response);
          console.log("id: ", response.data._id);
          if (!response.data.error) {
            console.log("User Info Saved!!");
            this.setState({
              redirectTo: "/"
            });
          } else {
            alert("User Info couldnot be Saved.");
          }
        })
        .catch(err => {
          console.log("sign up error: ", err);
        });
    } else {
      alert("Pls provide with user details");
    }
  };
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
    return (
      <div className="SignupForm">
        <h4>User Information</h4>
        <form className="form-horizontal">
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
                onChange={this.handleAgeChange}
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
                onChange={this.handleGenderChange}
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
                onChange={this.handleWeightChange}
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
                onChange={this.handleHeightChange}
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
                value={this.state.phoneNumber}
                onChange={this.handlePhoneNumberChange}
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
                onChange={this.handleGoalChange}
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
                onChange={this.handleRecommendedIntakeChange}
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
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserInfo;
