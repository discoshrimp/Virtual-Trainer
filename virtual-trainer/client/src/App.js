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
	     
<<<<<<< HEAD
// 	      <Switch>
//          <Route exact path = '/' component{SignUp} />
// 	        <Route exact path="/articles" component={Articles} />
//          <Route exact path ='/edamam/ component = {Edamam} />
=======
	      <Switch>
	        <Route exact path="/articles" component={Articles} />
	        <Route exact path="/" component={SignUp}/>
	      </Switch>
	    </div>
  	</Router>
>>>>>>> b91893a314e567c94e91accfd2b0bb52e8044e60

    );
  }

}

export default App;
