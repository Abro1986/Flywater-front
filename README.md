# Flywater-front

This is a website built for FlyWater River Restoration of Fort Collins, Colorado.

It was made using React for the front end, and the backend was made with Node/Express.

Making a website for this Company was originally my idea, and I approached the company about remaking their exsisting website.
Before having a meeting with them about their needs with this website I had many ideas. Such as the user being able to start a project proposal via their website. I also wanted to set up a contact page that simply sent them an email to request a follow up which was implemented. 
	
However, after meeting with FlyWater. they explained their needs in a website and it was wildly different then my original idea. they did not care about having a project page/ database. What they did care about was the info/content that the website provided. FlyWater's vice president and marketing manager also wanted the ability to change anything on the website on the fly. Which I believe is possible however, it will require a page completely populated with content that is saved in a database and then updated/deleted via a backend UI with forms that can be edited. it will also need to save pictures and icons. It was a bit too much for me for three days.

The user would want to learn some information about FlyWater river restoration. 

The user would want to be able to send an email to the company

The admin on the backend would want to be able to change content to reflect the front end.(not yet implemented)

here is my trello board for this project:
https://trello.com/b/UyWY8cqD/fly-water-todo-list

this is the first iteration of this website and I am proud of what it does do, and how it looks, but I look forward to continue working on this website in the future! 

Because this was a project for a client it does not meet every requirement of this project because it does not have full crud or a database. However, it does use Sendgrids email API and I did learn quite a bit about connecting a front end to a backend that is deployed to a seperate hosting service such as Heroku.

This is a code snippet I am particulary proud of :

onInputChange(event){
		this.setState({
			[event.target.name]: event.target.value,
			[event.target.email]: event.target.value,
			[event.target.content]: event.target.value
		})
	}

this Input change function is a function for every input field of the form. alternativly I would have to write a function for each field. 
in other words 3 functions become 1. 	










