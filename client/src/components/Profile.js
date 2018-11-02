import React, { Component } from "react";
import ProfileResult from "../pages/ProfileResult";
import Profile from "../pages/Profile";
import API from "../utils/apis";
import axios from "axios";

class Profiles extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      profiles: {}
    };
  }
  componentDidMount() {
    this.getSessionData();
  }

  getSessionData = username => {
    API.getUser(username).then(response => {
      this.setState({ user: response.data.user });
      console.log("session user: ", this.state.user);
      this.getProfileDetail();
    });
  };

  getProfileDetail = () => {
    const User = this.state.user;
    console.log("profile user: ", User);
    axios.get("/api/signup", { user: this.state.user }).then(response => {
      console.log("Profile API: ", response);
      if (response) {
        this.setState({ profiles: response.data });
        console.log("profile detail: ", this.state.profiles);
        this.renderProfile();
      }
    });
  };

  goToUserInfo = event => {
    event.preventDefault();
    let path = `/UserInfo`;
    this.props.history.push(path);
  };

  renderProfile = () => {
    console.log("this.state.profiles", this.state.profiles);
    return (
      <ProfileResult
        key={this.state.profiles._id}
        age={this.state.profiles.age}
        height={this.state.profiles.height}
        weight={this.state.profiles.weight}
        goal={this.state.profiles.goal}
        recommendedIntake={this.state.profiles.recommendedIntake}
      />
    );
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="panel">
              <div className="panel-body">
                <div>
                  <Profile
                    getProfileDetail={this.getProfileDetail}
                    renderProfile={this.renderProfile}
                  />
                  <button
                    className="profile-btn col-4"
                    onClick={this.goToUserInfo}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profiles;
