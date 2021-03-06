import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getShotDetails, reset, likeShot } from './shot-detail.actions'
import './shot-detail.scss'
import iconLike from './assets/icon-shotstat-like.png'
import Shot from '../shot/shot'
import Loader from '../common/loader/loader'

class ShotsDetail extends Component {
  componentDidMount () {
    const {shotId} = this.props.params
    this.props.getShotDetails(shotId)
  }

  componentWillUnmount () {
    this.props.reset()
  }

  _likeShot (shotId) {
    this.props.likeShot(shotId)
  }

  render () {
    const {shot} = this.props
    if (shot.id) {
      return (
        <div className='shot-detail'>
          <Shot shot={shot} imageType='hidpi' />
          <div className='content-like-shot'>
            <div className='like-shot' onClick={() => this._likeShot(shot.id)}>
              <span>Like </span>
              <img src={iconLike} />
            </div>
          </div>
        </div>
      )
    }
    return <Loader msg='Carregando shot...' />
  }
}

const mapStateToProps = state => ({
  shot: state.shotDetail
})

const mapDispatchToProps = dispatch => bindActionCreators({getShotDetails, reset, likeShot}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShotsDetail)
