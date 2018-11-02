import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../App.css";
import { Motion, spring } from "react-motion";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import axios from "axios";

class SignExpanded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexState: false,
      animIsFinished: false,
      inputData: {
        UserName: "",
        password: "",
        Age: "",
        Gender: "",
        Weight: "",
        WeightGoal: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.setState({ flexState: !this.state.flexState });
  }

  isFinished = () => {
    this.setState({ animIsFinished: true });
  };
  handleSubmit() {
    console.log("THis is being hit");
    axios
      .post("/signup", { inputData: this.state.inputData })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  handleInputChange(evt) {
    const { inputData } = this.state;
    this.setState({
      inputData: {
        ...inputData,
        [evt.target.id]: evt.target.value
      }
    });
  }

  render() {
    console.log(this.state.inputData);
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
                <div
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
                  <Input
                    id="UserName"
                    type="text"
                    placeholder="User Name"
                    handleInputChange={this.handleInputChange}
                    name={"UserName"}
                    value={this.state.inputData["UserName"]}
                  />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    handleInputChange={this.handleInputChange}
                    name={"password"}
                    value={this.state.inputData["password"]}
                  />
                  <Input
                    id="Age"
                    type="text"
                    placeholder="Age"
                    handleInputChange={this.handleInputChange}
                    name={"Age"}
                    value={this.state.inputData["Age"]}
                  />
                  <Input
                    id="Gender"
                    type="text"
                    placeholder="Gender"
                    handleInputChange={this.handleInputChange}
                    name={"Gender"}
                    value={this.state.inputData["Gender"]}
                  />
                  <Input
                    id="Height"
                    type="text"
                    placeholder="Height"
                    handleInputChange={this.handleInputChange}
                    name={"Height"}
                    value={this.state.inputData["Height"]}
                  />
                  <Input
                    id="Weight"
                    type="text"
                    placeholder="Weight"
                    handleInputChange={this.handleInputChange}
                    name={"Weight"}
                    value={this.state.inputData["Weight"]}
                  />
                  <Input
                    id="WeightGoal"
                    type="text"
                    placeholder="Weight Goal"
                    handleInputChange={this.handleInputChange}
                    name={"WeightGoal"}
                    value={this.state.inputData["WeightGoal"]}
                  />
                  <SubmitButton
                    handleSubmit={this.handleSubmit}
                    type={this.props.type}
                  />
                  <a href="url" className="forgotPass">
                    {this.props.type === "signIn" ? "Forgot password?" : ""}
                  </a>
                </div>
              )}
            </Motion>
          </div>
        )}
      </Motion>
    );
  }
}

SignExpanded.PropTypes = {
  type: PropTypes.string
};

export default SignExpanded;
