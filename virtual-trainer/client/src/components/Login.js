import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      redirectTo: null
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
    console.log("Login form: ", this.state.userName);
    if (this.state.userName && this.state.password !== "") {
      console.log("User to login: ", this.state.userName, this.state.password);
      axios
        .post("/auth/login", {
          username: this.state.userName,
          password: this.state.password
        })
        .then(response => {
          console.log("response: ", response);
          console.log("UserName found!!");
          alert(
            `Welcome ${response.data.user.userName} ! Redirecting to Profile`
          );
          console.log("id: ", response.data);
          this.setState({
            redirectTo: "/userinfo"
          });
        })
        .catch(err => {
          console.log("Login error: ", err);
          console.log("User not found");
          alert("User not found or password incorrect");
          this.setState.username = "";
          this.setState.password = "";
        });
    } else {
      alert("Pls provide with userName and password");
    }
  };
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="LoginForm">
          <h4>Sign In</h4>
          <div className="row" />
          <form className="form-horizontal">
            <div className="form-group">
              <div className="col-md-4 col-sm-12 col-xs-12">
                <label className="form-label" htmlFor="userName">
                  UserName
                </label>
              </div>
              <div className="col-3 col-mr-auto">
                <input
                  className="form-input"
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="userName"
                  value={this.state.userName}
                  onChange={this.handleInputChange}
                />
              </div>
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
            </div>
            <div className="form-group">
              <div className="col-7" />
              <button
                className="btn btn-primary col-1 col-mr-auto"
                onClick={this.handleFormSubmit}
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default Login;
