import React, { Component } from "react";
import propTypes from "prop-types";
import { Motion, spring } from "react-motion";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import axios from "axios";
import "../../App.css";

class SignExpanded2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      redirectTo: null,
      flexState: false,
      animIsFinished: false
    };
    //To keep the value of the input boxes to always be current with 'state'
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleUserNameChange = this.handleUserNameChange.bind(this);
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log("in handleinputchange");
  };
  // handleUserNameChange = event => {
  //   this.setState({ userName: event.target.value });
  // };
  // handlePasswordChange = event => {
  //   this.setState({ password: event.target.value });
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Login form: ", this.state.userName);
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
        // this.setUserName(response.data.user.userName); //Setting the token in localStorage
        console.log("id: ", response.data);
        // this.props.history.replace("/Profile");
      })
      .catch(err => {
        console.log("Login error: ", err);
        console.log("User not found");
        alert("User not found or password incorrect");
        this.setState.username = "";
        this.setState.password = "";
      });
  };

  componentDidMount() {
    this.setState({ flexState: !this.state.flexState });
  }

  isFinished = () => {
    this.setState({ animIsFinished: true });
  };

  render() {
    console.log("expanded:", this.state.userName);
    return (
      <Motion
        style={{
          flexVal: spring(this.state.flexState ? 8 : 1)
        }}
        onRest={this.isFinished}
      >
        {({ flexVal }) => (
          <div
            className={
              this.props.type === "signIn" ? "signInExpanded" : "signUpExpanded"
            }
            style={{
              flexGrow: `${flexVal}`
            }}
          >
            <Motion
              style={{
                opacity: spring(this.state.flexState ? 1 : 0, {
                  stiffness: 300,
                  damping: 17
                }),
                y: spring(this.state.flexState ? 0 : 50, {
                  stiffness: 100,
                  damping: 17
                })
              }}
            >
              {({ opacity, y }) => (
                <form
                  className="logForm"
                  style={{
                    WebkitTransform: `translate3d(0, ${y}px, 0)`,
                    transform: `translate3d(0, ${y}px, 0)`,
                    opacity: `${opacity}`
                  }}
                >
                  <h2>
                    {this.props.type === "signIn" ? "SIGN IN" : "SIGN UP"}
                  </h2>
                  <input
                    className="form-input"
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="User Name"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                  />
                  <input
                    className="form-input"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                  <input onClick={this.handleFormSubmit} type="submit" />
                  <a href="url" className="forgotPass">
                    {this.props.type === "signIn" ? "Forgot password?" : ""}
                  </a>
                </form>
              )}
            </Motion>
          </div>
        )}
      </Motion>
    );
  }
}

SignExpanded2.propTypes = {
  type: propTypes.string
};

export default SignExpanded2;
