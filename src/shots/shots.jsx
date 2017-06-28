import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InfiniteScroll from 'redux-infinite-scroll'

import './shots.scss'
import ShotMenu from '../shot-menu/shot-menu'
import Shot from '../shot/shot'
import {getShots} from './shots.actions'

class Shots extends Component {
  _loadMore () {
    if (!this.props.isFetching) {
      this.props.getShots()
    }
  }

  _renderShots (shotList) {
    return shotList.map((shot, i) => <Shot shot={shot} key={i} />)
  }

  render () {
    const {shotList} = this.props
    return (
      <div>
        <ShotMenu />
        <InfiniteScroll
          className='shots'
          items={this._renderShots(shotList)}
          elementIsScrollable={false}
          loadMore={this._loadMore.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shotList: state.shot.shotList,
  isFetching: state.shot.isFetching
})

const mapDispatchToProps = dispatch => bindActionCreators({getShots}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Shots)
