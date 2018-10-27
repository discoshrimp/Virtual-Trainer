import React, { Component } from 'react';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard'
import Nutrition from './pages/Nutrition'
import Articles from './pages/Article'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



class App extends Component {

  render() {
    return (
      <Router>
        <div >
          <Switch>
            <Route exact path='/' component={SignUp} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path='/nutrition/' component={Nutrition} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
