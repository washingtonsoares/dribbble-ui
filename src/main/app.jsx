import React from 'react'

import Navbar from '../navbar/navbar'
import Routes from './routes'
import './app.scss'

export default props => (
  <div className='container'>
    <Navbar />
    <Routes />
  </div>
)
