import React, { Component } from 'react';
import './App.css';
import Navbar from './Config/routes';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav id="navbar" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              
              <Navbar/>
            </div>
          </nav>
          
          <h1 className="App-title">FlyWater construction</h1>
        </header>
        <p className="App-intro">
          We get your drift
        </p>
      </div>
    );
  }
}

export default App;
