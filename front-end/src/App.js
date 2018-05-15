import React, { Component } from 'react';
import './App.css';
import Header from './Components/header';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
import MyRoutes from './Config/routes';

//import About from './Containers/About'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav id="navbar" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <Header/>
               
            </div>
          </nav>
          
            <img id='logo' src="http://flywater.com/images/ico/fb_share.png"></img>
          
          
          <h3 className="App-intro">
          We get your drift
          </h3>
        </header>
        
          {MyRoutes}
      </div>
    );
  }
}

export default App;
