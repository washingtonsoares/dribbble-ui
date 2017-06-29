const INITIAL_STATE = {
  isFetching: false,
  currentPage: 1,
  isSearching: false,
  shotsSize: 'small',
  shotList: []
}

const shotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SHOTS':
      console.log('FETCH_SHOTS')
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
    case 'SEARCH_SHOTS':
      return {
        ...state,
        isSearching: true,
        shotList: _filterShots(state.shotList, action.payload)
      }
    case 'RESIZE_SHOTS':
      return {
        ...state,
        shotsSize: action.payload
      }
    case 'RESET_STATE':
      return INITIAL_STATE
    default:
      return state
  }
}

function _filterShots (shotList, query) {
  return shotList.filter((shot) => {
    return shot.title.toLowerCase().includes(query.toLowerCase())
  })
}

export default shotReducer
