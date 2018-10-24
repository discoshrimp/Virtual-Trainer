import React, { Component } from "react";
// import axios from "axios";
import API from '../../utils'

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
    };
    //To keep the value of the input boxes to always be current with 'state'
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
    if (this.state.password !== this.state.confirmPassword) {
      alert("Password do not match");
    } else if (this.state.username || this.state.password !== "") {
      //request to server code goes
      let newUserToBeSaved = {
        userName: this.state.username,
        password: this.state.password
      };
      console.log("new User: ", newUserToBeSaved);
       API.createUser(newUserToBeSaved)
      // axios
      //   .post("/createuser", {
      //     userName: this.state.username,
      //     password: this.state.password
      //   })
      //   .then(response => {
      //     console.log("response: ", response);
      //     if (!response.data.error) {
      //       console.log("Username accepted!!");
      //       this.setState({
      //         redirectTo: "/login"
      //       });
      //     } else {
      //       alert("Username is taken");
      //       // console.log("error: ", err);
      //       this.setState.username = "";
      //       this.setState.password = "";
      //       this.setState.confirmPassword = "";
      //     }
      //   })
      //   .catch(err => {
      //     console.log("sign up error: ", err);
      //   });
    } else {
      alert("Pls provide with username and password");
    }
  };
  render() {
    return (
      <div className="SignupForm">
        <h4>Sign Up</h4>
        <form className="form-horizontal">
          <div className="form-group">
            <div className="col-md-4 col-sm-12 col-xs-12">
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
            {/* </div> */}
            {/* <div className="row form-group"> */}
            <div className="col-md-4 col-sm-12 col-xs-12">
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
            <div className="col-md-4 col-sm-12 col-xs-12">
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
