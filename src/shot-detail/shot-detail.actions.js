import axios from 'axios'
const BASE_URL = 'https://api.dribbble.com/v1'
const ACCESS_TOKEN = '7be90c891d972d92b9451c465e51d0796932a45a5f11f60d18423983480abacb'

export const getShotDetails = (shotId) => {
  const request = axios.get(`${BASE_URL}/shots/${shotId}?&access_token=${ACCESS_TOKEN}`)
	return {
		type: 'FETCH_SHOT_DETAIL',
		payload: request
	}
}

export const reset = () => {
	return {
		type: 'RESET'
	}
}
