import React, { Component } from "react";
import SignUp from "../src/components/sign-up";
import UserInfo from "../src/components/UserInfo";
import Login from "../src/components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Articles from "./pages/Article";

class App extends Component {

  render() {
    return (
      <Router>
        <div >
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/UserInfo" component={UserInfo} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
