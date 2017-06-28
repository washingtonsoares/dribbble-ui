import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Shots from '../shots/shots'

export default props => (
  <Router history={hashHistory}>
    <Route path='/shots' component={Shots} />
    <Redirect from='*' to='/shots' />
  </Router>
)
