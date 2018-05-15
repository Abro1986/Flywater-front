import React, { Component } from 'react';
import axios from 'axios';




class Contact extends Component {

	constructor(){
		super()
		this.state = {
			name: '',
			email: '',
			content: '',
			post: ''
		}
		this.onInputChange = this.onInputChange.bind(this)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}
	onInputChange(event){
		this.setState({
			[event.target.name]: event.target.value,
			[event.target.email]: event.target.value,
			[event.target.content]: event.target.value
		})
	}
	onFormSubmit(event){
		event.preventDefault()

		let newEmail = {
			name: this.state.name,
			email: this.state.email,
			content: this.state.content
		}

		axios.post('https://flywater-back.herokuapp.com/api/mail', newEmail)
		console.log(this.state.name)
		console.log(this.state.email)
//		let name = this.state.name
		this.setState({
			name: '',
			email: '',
			content: '',
			post: 'Thank you for your message!'
		})
	}

	componentDidMount(event){
		axios.get('https://flywater-back.herokuapp.com/api/all').then((response) =>{ 
			console.log(response)
		})		
	}

  render() {
    return (
      <div className='river'>
      	<h3>Contact Us</h3>
      	<p>Fill in the blanks below and we'll get back to you ASAP</p>
      	<p>{this.state.post}</p>
        <form className='container' onSubmit={ this.onFormSubmit }>
        	<div className="form-row ">
    				<div className="form-group col-md-6">
      				<input
      				 type="text"
      				 name='name'
      				 onChange={ this.onInputChange } 
      				 className="form-control" 
      				 placeholder="First name" 
      				 value={this.state.name}/>
    				</div>
    			<div className="form-group col-md-6">
      				<input 
      				type="text" 
      				name='email'
      				onChange={ this.onInputChange }
      				className="form-control" 
      				placeholder="Email"
      				value={this.state.email}/>
      			</div>		
      		<div className="orm-group col-md-6">
      				<input
      				type="text"
      				name='content'
      				className="form-control"
      				onChange={this.onInputChange}
      				value={this.state.content}
      				placeholder="Content"
      				/>
      				

    			</div>
  			</div>
        	<button type='submit'>Send it</button>
        </form>
      </div>  
    );
  }
}

export default Contact;