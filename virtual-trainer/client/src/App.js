import React, { Component } from 'react';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import API from "./apiRoutes/apiRoutes"
import './App.css';
import Articles from "./pages/Article/Articles"


class App extends Component {

handleNutritionInput = ()=>{


}
  render() {
    return (
    <Router>
	    <div >
 	      <Switch>
          <Route exact path = '/' component={SignUp} />
 	        <Route exact path="/articles" component={Articles} />
          <Route exact path ='/edamam/' component = {Edamam} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
