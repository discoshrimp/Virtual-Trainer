import React, { Component } from 'react';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// r
import './App.css';
import Articles from "./pages/Article/"
import Edamam from './pages/Nutrition'


class App extends Component {

  render() {
    return (
    <Router>
	    <div >
 	      <Switch>
          <Route exact path = '/' component={SignUp} />
 	        <Route exact path="/articles" component={Articles} />
          <Route exact path ='/nutrition/' component = {Edamam} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
