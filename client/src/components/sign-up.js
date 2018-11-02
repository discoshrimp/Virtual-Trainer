import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      redirectTo: null
    };
    //To keep the value of the input boxes to always be current with 'state'
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
  }

  handleUserNameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };
  handleConfirmPasswordChange = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("SignUp form: ", this.state.username);
    if (this.state.password !== this.state.confirmPassword) {
      alert("Password do not match");
    } else if (this.state.username || this.state.password !== "") {
      //request to server code goes
      axios
        .post("/signup", {
          userName: this.state.username,
          password: this.state.password
        })
        .then(response => {
          console.log("response: ", response);
          if (!response.data.error) {
            console.log("Username accepted!!");
            alert(`Welcome ${response.data.userName} ! Redirecting to Login`);
            this.setState({
              redirectTo: "/login"
            });
          } else {
            alert("Username is taken");
            this.setState.username = "";
            this.setState.password = "";
            this.setState.confirmPassword = "";
          }
        })
        .catch(err => {
          console.log("sign up error: ", err);
        });
    } else {
      alert("Pls provide with username and password");
    }
  };
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
    return (
      <div className="container signupForm">
        <h4>Sign Up</h4>
        <form className="form">
          <div className="form-group">
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="text"
                id="username"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleUserNameChange}
              />
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="password"
                id="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
            </div>
            <div className="col-3 col-mr-auto">
              <input
                className="form-input"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirm password"
                value={this.state.confirmPassword}
                onChange={this.handleConfirmPasswordChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-7" />
            <button
              className="btn btn-default col-2 col-mr-auto"
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

export default Signup;
