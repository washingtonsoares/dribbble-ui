import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ShotMenu from '../shot-menu/shot-menu'
import ShotList from './shotList'
import './shots.scss'
import {getShots} from './shotActions'

class Shots extends Component {

	componentDidMount () {
		this.props.getShots()
	}

  render () {
		const {shotList} = this.props
    return (
      <div>
        <ShotMenu />
        <ShotList shots={shotList}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shotList: state.shot.shotList
})

const mapDispatchToProps = dispatch => bindActionCreators({getShots}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Shots)
