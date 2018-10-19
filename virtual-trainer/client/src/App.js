import React, { Component } from 'react';
import SignUp from '../src/components/sign-up';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import API from "./utils/apis"
import './App.css';
import Articles from "./pages/Articles"

class App extends Component {
  render() {
    return (
    <Router>
	    <div >
	     
	      <Switch>
	        <Route exact path="/articles" component={Articles} />
	        <Route exact path="/" component={SignUp}/>
	      </Switch>
	    </div>
  	</Router>

    );
  }

}

export default App;
