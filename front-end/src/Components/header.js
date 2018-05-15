import React, {Component} from 'react'
import drake from '../images/drakeN.png'
import {Link} from 'react-router-dom'


class Header extends Component { 
	render (){
		return (		
      <div>
        <div className="flybox">
      	 <img className="App-logo" src={drake} alt="nothing"/>
        </div>
        <Link to='/'>Home</Link> 
        
        
        <Link to={'/projects'}> What We Do </Link>
        <Link to={'/team'}> Team </Link>
        <Link to={'/contact'}> Contact </Link>       
       </div>    
    )
	}	
}

export default Header;