import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InfiniteScroll from 'redux-infinite-scroll'
import Loader from '../common/loader/loader'
import './shots.scss'
import ShotMenu from '../shot-menu/shot-menu'
import Shot from '../shot/shot'
import {getShots} from './shots.actions'

class Shots extends Component {
  constructor (props) {
    super(props)
    this.state = { currentlyDisplayed: [] }
  }

  componentWillReceiveProps (nextProps) {
    const {shotList, searchTerm} = nextProps
    this.setState({
      currentlyDisplayed: this._filterShots(shotList, searchTerm)
    })
  }

  _filterShots (shotList, query) {
    return shotList.filter((shot) => {
      return shot.title.toLowerCase().includes(query.toLowerCase())
    })
  }

  _loadMore () {
    if (!this.props.isFetching && !this.props.isSearching) {
      this.props.getShots()
    }
  }

  _renderShots (shotList) {
    return shotList.map((shot, i) => <Shot shot={shot} shotSize={this.props.shotsSize} key={i} />)
  }

  render () {
    const {isFetching} = this.props
    return (
      <div>
        <ShotMenu />
        <InfiniteScroll
          className='shots'
          items={this._renderShots(this.state.currentlyDisplayed)}
          elementIsScrollable={false}
          loadMore={this._loadMore.bind(this)} />
        {isFetching && <Loader msg='Carregando shots...' position={this.state.currentlyDisplayed.length ? 'bottom' : 'top'} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shotList: state.shot.shotList,
  isFetching: state.shot.isFetching,
  isSearching: state.shot.isSearching,
  shotsSize: state.shot.shotsSize,
  searchTerm: state.shot.searchTerm
})

const mapDispatchToProps = dispatch => bindActionCreators({getShots}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Shots)
