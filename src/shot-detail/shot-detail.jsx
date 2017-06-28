import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getShotDetails, reset, likeShot} from './shot-detail.actions'

class ShotsDetail extends Component {

	componentDidMount() {
		const {shotId} = this.props.params
		this.props.getShotDetails(shotId)
	}

	componentWillUnmount() {
		this.props.reset()
	}

	likeShot(shotId) {
		this.props.likeShot(shotId)
	}

  render () {
		const {shot} = this.props
		if (shot.id) {
      return (
				<div>
					<img src={shot.images.teaser} />
					<a href="javascript:void(0)" onClick={() => this.likeShot(shot.id)}>
						Like post
					</a>
				</div>
			)
    }
		return <div>Loading...</div>;
  }
}

const mapStateToProps = state => ({
  shot: state.shotDetail
})

const mapDispatchToProps = dispatch => bindActionCreators({getShotDetails, reset, likeShot}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShotsDetail)
