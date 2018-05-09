import React, {Component} from 'react'
import drake from '../images/drakeN.png'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Navbar extends Component { 
	render (){
		return (
		<Router>
      <div>
      	<img className="App-logo" src={drake} alt="nothing"/>
        <a><Link to='/'>home</Link> </a>
        <a> what we do</a>
        <a> recent </a>
        <a> projects </a>
        <a> team </a>
        <a> contact </a>
       </div>  
    </Router>
    )
	}	
}

export default Navbar;