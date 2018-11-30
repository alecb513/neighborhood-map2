import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import './components/Map'
import DisplayMap from './components/Map'

class App extends Component {




  render() {
    return (
      <div>
        <h1>Google Map should load here</h1>
        <DisplayMap />
      </div>
    )
  }
}
export default App;