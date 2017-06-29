import axios from 'axios'
const BASE_URL = 'https://api.dribbble.com/v1'
const ACCESS_TOKEN = '7be90c891d972d92b9451c465e51d0796932a45a5f11f60d18423983480abacb'

export const getShots = () => {
  return (dispatch, getState) => {
    let {currentPage, isSearching} = getState().shot
    if (isSearching) return

    dispatch({ type: 'FETCH_SHOTS' })
    return axios.get(`${BASE_URL}/shots?page=${currentPage}&per_page=12&access_token=${ACCESS_TOKEN}`)
    .then(({data}) => {
      dispatch({ type: 'FETCH_SHOTS_SUCCESS', payload: data })
    })
  }
}

export const getShotDetails = (shotId) => {
  const request = axios.get(`${BASE_URL}/shots/${shotId}?&access_token=${ACCESS_TOKEN}`)
  return {
    type: 'FETCH_SHOT',
    payload: request
  }
}

export const searchShots = (query) => {
  return (dispatch) => {
    if (query) {
      dispatch({type: 'SEARCH_SHOTS', payload: query})
    } else {
      dispatch({ type: 'RESET_STATE' })
    }
  }
}

export const resizeShots = (size) => {
	return {
    type: 'RESIZE_SHOTS',
    payload: size
  }
}
