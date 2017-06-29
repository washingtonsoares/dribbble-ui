const INITIAL_STATE = {}

const shotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SHOT_DETAIL':
      return action.payload.data
    case 'LIKE_SHOT':
      return state
    case 'RESET':
      return INITIAL_STATE
    default:
      return state
  }
}

export default shotReducer
