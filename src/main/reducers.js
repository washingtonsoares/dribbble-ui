import { combineReducers } from 'redux'
import shotsReducer from '../shots/shots.reducer'
import shotDetailReducer from '../shot-detail/shot-detail.reducer'

const rootReducer = combineReducers({
  shot: shotsReducer,
	shotDetail: shotDetailReducer
})

export default rootReducer
