import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './shot-menu.scss'
import {searchShots} from '../shots/shots.actions'

class ShotMenu extends Component {
  _searchShots (e) {
    let {value} = e.target
    this.props.searchShots(value)
  }

  render () {
    return (
      <nav className='shot-menu'>
        <form className='form-search'>
          <input type='text' placeholder='Search shots by title' onKeyUp={(e) => this._searchShots(e)} />
        </form>
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({searchShots}, dispatch)

export default connect(null, mapDispatchToProps)(ShotMenu)
