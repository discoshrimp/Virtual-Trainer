import React, { Component } from 'react';
import axios from 'axios';
import SignUp from '../src/components/sign-up';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp/>
      </div>
    );
  }
}

export default App;
