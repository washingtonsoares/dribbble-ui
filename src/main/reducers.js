import { combineReducers } from 'redux'
import shotReducer from '../shots/shotReducer'

const rootReducer = combineReducers({
  shot: shotReducer
})

export default rootReducer
