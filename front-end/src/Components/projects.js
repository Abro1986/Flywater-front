import React, { Component } from 'react';





class Projects extends Component {
  render() {
    return (
      <div className='river'>
      	<div className='textbox'>
      		<div className = 'picbox'>
	      		<img className='wwdImg' src="http://www.flywater.com/images/made/images/uploads/about/Assessment_900_675_s_c1.JPG"></img>
	        </div>
	        	<h3>Assessment</h3>
	        		<p>FlyWater’s assessment capabilities provide investigation, analysis, and evaluation of riverine habitats and resources. Our assessment of existing conditions help clients understand the value and potential of their conservation or recreation resources.</p>
		        		<ul>
		        			<li>Aquatic Habitat Assessment</li>
		        			<li>Fish Passage</li>
		        			<li>Flow Alteration/Low Flow Analysis</li>
		        		</ul> 
        </div>
      </div>  
    );
  }
}

export default Projects;