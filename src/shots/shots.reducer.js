const INITIAL_STATE = {
  isFetching: false,
  currentPage: 1,
  shotList: []
}

const shotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SHOTS':
      return {
        ...state,
        isFetching: true
      }
    case 'FETCH_SHOTS_SUCCESS':
      return {
        isFetching: false,
        currentPage: state.currentPage + 1,
        shotList: [
          ...state.shotList,
          ...action.payload
        ]
      }
    case 'FETCH_SHOT':
      return state
    default:
      return state
  }
}

export default shotReducer
