import axios from 'axios'
const BASE_URL = 'https://api.dribbble.com/v1'
const ACCESS_TOKEN = '7be90c891d972d92b9451c465e51d0796932a45a5f11f60d18423983480abacb'

export const getShots = () => {
  return (dispatch, getState) => {
    let {currentPage} = getState().shot
    dispatch({ type: 'FETCH_SHOTS' })
    axios.get(`${BASE_URL}/shots?page=${currentPage}&per_page=12&access_token=${ACCESS_TOKEN}`)
    .then(({data}) => {
      dispatch({ type: 'FETCH_SHOTS_SUCCESS', payload: data })
    })
  }
}
