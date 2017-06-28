import React from 'react'
import './shot.scss'

export default props => {
	const {shot} = props

	return (
	  <div className='shot'>
	    <figure>
	      <img src={shot.images.teaser} alt='An awesome picture' />
	      <figcaption>Fig. {props.title}</figcaption>
	    </figure>
	    <div className='shot-author'>
	      <img src={shot.user.avatar_url} />
	      <span>{shot.user.name} </span>
	    </div>
	  </div>
	)
}
