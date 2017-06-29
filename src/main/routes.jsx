import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Shots from '../shots/shots'
import ShotDetail from '../shot-detail/shot-detail'

export default props => (
  <Router history={hashHistory}>
    <Route path='/shots' component={Shots} />
    <Route path='/shot/:shotId' component={ShotDetail} />
    <Redirect from='*' to='/shots' />
  </Router>
)
