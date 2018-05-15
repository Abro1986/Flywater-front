import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'
import '../App.css';




class ControlledCarousel extends React.Component {
 constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
  //  alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        className="river"
      >
        <Carousel.Item>
          <img className='fishpic' width={100} height={100} alt="900x500" src="https://wgfd.wyo.gov/fishexam/Images/golden_trout_photo2.jpg" ></img>
          <Carousel.Caption>
	          <div className='textbox'>
	            <h3>Golden Trout</h3>
	            <p>The California state fish, elusive, and fragile </p>
	          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='fishpic' width={100} height={100} alt="900x500" src="https://mtnweekly.com/wp-content/uploads/2014/08/Steelhead-Trout-Flyfishing-734x454.jpg" ></img>
          <Carousel.Caption>
          	<div className='textbox'>
            	<h3>Steelhead</h3>
            	<p>Anadromous, Seasonal, Jumper</p>
            </div>	
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='fishpic' width={100} height={100} alt="900x500" src="https://fantasticmrtrout.files.wordpress.com/2013/01/red-trout-in-water-small-version.jpg" ></img>
          <Carousel.Caption>
	          <div className='textbox'>
	            <h3>Brown Trout</h3>
	            <p>
	              Hard fighting, resilient, predatory
	            </p>
	          </div>  
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

//render(<ControlledCarousel />);

export default ControlledCarousel