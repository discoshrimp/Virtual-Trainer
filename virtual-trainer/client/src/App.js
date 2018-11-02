import React, { Component } from "react";
import axios from "axios";
import API from "../src/utils";
import SignUp from "../src/components/sign-up";
import UserInfo from "../src/components/UserInfo";
import Login from "../src/components/Login";
import Profile from "../src/components/Profile";
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Articles from "./pages/Article";
// import SignupLogin from "../src/components/CSS/ReactTransitionGroup";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
=======
import Articles from "./pages/Article";
>>>>>>> origin/master

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectTo: null,
      loggedIn: false,
      user: null
    };
    this.logout = this.logout.bind(this);
    // this.login = this.login.bind(this);
  }

  componentDidUpdate(user) {
    API.getUser(user).then(response => {
      console.log("App.js auth/user: ", response.data.user);
      if (response.data.user) {
        console.log("There is a user: ", response.data.user);
        if (this.state.loggedIn !== true) {
          this.setState({ loggedIn: true, user: response.data.user });
          console.log("loggedin: ", this.state.loggedIn);
        }
      } else {
        this.setState({ loggedIn: false, user: null });
      }
    });
  }

  logout(event) {
    event.preventDefault();
    console.log("Logging out");
    axios.post("/auth/logout").then(response => {
      console.log("Log out data: ", response.data);
      if (response.status === 200) {
        alert(`Logging out...Bye!`);
        this.setState({ loggedIn: false, user: null });
        window.location.reload();
        if ("/*" !== "/Home") {
          this.setState({ redirectTo: "/" });
        }
      }
    });
  }

  deleteAccount(username) {
    console.log("Account to be deleted: ", username);
    API.getAccount(username).then(response => {
      console.log("delete data: ", response.data);
      if (response.status === 200) {
        alert(`Deleting your account`);
        this.setState({ loggedIn: false, user: null });
        if ("/*" !== "/Home") {
          this.setState({ redirectTo: "/Home" });
        }
      }
    });
  }

  login(username, password) {
    console.log("login input: ", username, password);
    axios.post("/auth/login", { username, password }).then(response => {
      console.log("login: ", response);
      if (response.status === 200) {
        alert(
          `Welcome ${response.data.user.userName} ! Redirecting to Profile`
        );
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
        console.log("After login: ", this.state.loggedIn, this.state.user);
      }
    });
  }

  goToProfile = event => {
    event.preventDefault();
    let path = `/Profile`;
    this.props.history.push(path);
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    }
    return (
      <div className="App">
        <div className="container">
          {/* <div className="container-fluid">
            <Header user={this.state.user} />
          </div> */}
          <Navbar loggedIn={this.state.loggedIn} logout={this.logout} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home user={this.state.user} />}
            />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/UserInfo" component={UserInfo} />
            <Route exact path="/articles" component={Articles} />
            <Route
              exact
              path="/Login"
              render={() => (
                <Login
                  login={() => this.login}
                  loggedIn={this.state.loggedIn}
                />
              )}
            />
            <Route exact path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
