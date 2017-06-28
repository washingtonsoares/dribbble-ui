import React from 'react'
import { Link } from 'react-router'
import './shot.scss'

export default props => {
  const {shot} = props

  return (
    <div className='shot'>
			<Link to={`/shot/${shot.id}`}>
	      <figure>
	        <img src={shot.images.teaser} alt='An awesome picture' />
	        <figcaption>{shot.title}</figcaption>
	      </figure>
			</Link>
      <div className='shot-author'>
        <img src={shot.user.avatar_url} />
        <span>{shot.user.name} </span>
      </div>
    </div>
  )
}
