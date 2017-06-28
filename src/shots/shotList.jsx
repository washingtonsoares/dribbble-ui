import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Shot from '../shot/shot'
import ReduxInfiniteScroll from 'redux-infinite-scroll'
import {getShots} from './shotActions'
import InfiniteScroll from 'redux-infinite-scroll'

class ShotList extends Component {
  constructor (props) {
    super(props)
  }

  _loadMore () {
    if (!this.props.isFetching) {
      this.props.getShots()
    }
  }

  _renderShots () {
    return this.props.shots.map(
				(shot, i) => <Shot shot={shot} key={i} />
			)
  }

  render () {
    return (
      <InfiniteScroll
        className='shots'
        items={this._renderShots()}
        elementIsScrollable={false}
        loadMore={this._loadMore.bind(this)}
        />
	  )
  }
}

ShotList.propTypes = {
  shots: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  isFetching: state.shot.isFetching
})

const mapDispatchToProps = dispatch => bindActionCreators({getShots}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShotList)
