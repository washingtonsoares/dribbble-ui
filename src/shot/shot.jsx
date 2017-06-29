import React, {Component} from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import './shot.scss'
const DRIBBBLE_URL = 'https://dribbble.com/'

class Shot extends Component {

	_getShotImage(imageType, shotSize) {
		if(imageType) {
			return imageType
		} else if(['medium', 'large'].includes(shotSize)) {
			return 'normal'
		}
		else {
			return 'teaser'
		}
	}

  render () {
    const {shot, imageType, shotSize} = this.props

    return (
      <div className={`shot ${shotSize || ''}`}>
        <Link to={`/shot/${shot.id}`}
          title={shot.title}
          className='shot-thumbnail'>
          <figure>
            <img src={shot.images[this._getShotImage(imageType, shotSize)]} alt={shot.title} />
            <figcaption>{shot.title}</figcaption>
          </figure>
        </Link>
        <div className='shot-author'>
          <img src={shot.user.avatar_url} />
          <a target='_blank'
            title={shot.user.name}
            href={DRIBBBLE_URL + shot.user.username}>
            {shot.user.name}
          </a>
        </div>
      </div>
    )
  }
}

Shot.propTypes = {
  shot: PropTypes.object.isRequired
}

export default Shot
