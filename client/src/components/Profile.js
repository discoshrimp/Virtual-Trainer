import React, { Component } from "react";
import ProfileResult from "../pages/ProfileResult";
import Profile from "../pages/Profile";
import API from "../utils/apis";
class Profiles extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      profiles: {},
      bmr: 0
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
    this.getProfile();
  };

  goToUserInfo = event => {
    event.preventDefault();
    let path = `/UserInfo`;
    this.props.history.push(path);
  };

  getProfile = () => {
    let username = this.state.user;
    API.getProfile(username).then(data => {
      console.log("Profile data: ", data.data);
      this.setState({ profiles: data.data });
    });
  };

  renderProfile = () => {
    console.log("this.state.profiles", this.state.profiles);
    console.log("this.state.profiles", this.state.profiles.userName);
    return (
      <ProfileResult
        key={this.state.profiles._id}
        user={this.state.profiles.userName}
        age={this.state.profiles.age}
        height={this.state.profiles.height}
        weight={this.state.profiles.weight}
        goal={this.state.profiles.goal}
        recommendedIntake={this.state.recommendedIntake}
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
