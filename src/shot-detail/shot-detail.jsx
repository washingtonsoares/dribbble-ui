import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getShotDetails, reset} from './shot-detail.actions'

class ShotsDetail extends Component {

	componentDidMount() {
		const {shotId} = this.props.params
		this.props.getShotDetails(shotId)
	}

	componentWillUnmount() {
		this.props.reset()
	}

  render () {
		const {shot} = this.props
		if (shot.id) {
      return (
				<div>
					<img src={shot.images.teaser} />
				</div>
			)
    }
		return <div>Loading...</div>;
  }
}

const mapStateToProps = state => ({
  shot: state.shotDetail
})

const mapDispatchToProps = dispatch => bindActionCreators({getShotDetails, reset}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShotsDetail)
