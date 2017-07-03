const INITIAL_STATE = {
  isFetching: false,
  currentPage: 1,
  isSearching: false,
  shotsSize: 'small',
  searchTerm: '',
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
        ...state,
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
        searchTerm: action.payload
      }
    case 'RESIZE_SHOTS':
      return {
        ...state,
        shotsSize: action.payload
      }
    case 'RESET_SEARCH':
      return {
        ...state,
        searchTerm: '',
        isSearching: false
      }
    default:
      return state
  }
}

export default shotReducer
