import React from 'react'
import { Link } from 'react-router'
import './shot.scss'

export default props => {
  const {shot} = props
	const DRIBBBLE_URL = 'https://dribbble.com/'
  return (
    <div className='shot'>
			<Link to={`/shot/${shot.id}`}
						title={shot.title}
						className="shot-thumbnail">
	      <figure>
	        <img src={shot.images.teaser} alt='An awesome picture' />
	        <figcaption>{shot.title}</figcaption>
	      </figure>
			</Link>
      <div className='shot-author'>
        <img src={shot.user.avatar_url} />
        <a target="_blank"
					title={shot.user.name}
					href={DRIBBBLE_URL+shot.user.username}>
					{shot.user.name}
				</a>
      </div>
    </div>
  )
}
