import React from 'react'
import logo from './assets/logo.png'
import './navbar.scss'

export default props => (
  <nav className='main-nav'>
    <a href='#/'>
      <img src={logo} />
    </a>
  </nav>
)
