import React from 'react'
import { 
  Route, 
  Router, 
  IndexRoute, 
  hashHistory
} from 'react-router'

import Main from '../components/Main'
import About from '../components/About'
import Profile from '../components/Profile'

export default (
  <Router history={hashHistory}>
    <Route path='/' >
      <IndexRoute component={Main} />
      <Route path='/About' component={About} />
      <Route path='/Profile' component={Profile} />
    </Route>
  </Router>
)