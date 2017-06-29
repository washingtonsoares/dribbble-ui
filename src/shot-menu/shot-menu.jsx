import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './shot-menu.scss'
import {searchShots, resizeShots} from '../shots/shots.actions'

class ShotMenu extends Component {
  _searchShots (e) {
    let {value} = e.target
    this.props.searchShots(value)
  }

  _resizeShots (size) {
    this.props.resizeShots(size)
  }

  render () {
    return (
      <nav className='shot-menu'>
        <div className='menu-actions'>
          <span className='hidden-xs resize-shots'>
            <a href='javascript:void(0)' onClick={() => this._resizeShots('small')}>pequeno </a>
            <a href='javascript:void(0)' onClick={() => this._resizeShots('medium')}>medio </a>
            <a href='javascript:void(0)' onClick={() => this._resizeShots('large')}>grande</a>
          </span>
          <form className='form-search'>
            <input type='text' placeholder='Search shots by title' onKeyUp={(e) => this._searchShots(e)} />
          </form>
        </div>
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({searchShots, resizeShots}, dispatch)

export default connect(null, mapDispatchToProps)(ShotMenu)
