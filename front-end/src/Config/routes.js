import React from 'react';

import {
  Route,
  Switch
} from 'react-router-dom'
import About from '../Containers/About'
import Contact from '../Components/contact'
import Recent from '../Components/recent'
import Projects from '../Components/projects'
import ControlledCarousel from '../Components/team'

export default (
    <Switch>
      <Route  exact path='/' component={ About}/>
      <Route  path='/projects' component={ Projects}/>
      <Route  path='/recent' component={ Recent}/>
      <Route  path='/team' component={ ControlledCarousel}/>
      <Route  path='/contact' component={ Contact}/>
    </Switch>
)


