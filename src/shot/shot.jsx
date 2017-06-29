import React, {Component} from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import './shot.scss'
const DRIBBBLE_URL = 'https://dribbble.com/'

class Shot extends Component {
  render () {
    const {shot, imageType} = this.props

    return (
      <div className='shot'>
        <Link to={`/shot/${shot.id}`}
          title={shot.title}
          className='shot-thumbnail'>
          <figure>
            <img src={shot.images[imageType || 'teaser']} alt={shot.title} />
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
