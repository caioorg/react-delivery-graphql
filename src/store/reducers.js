import { combineReducers } from 'redux'
import searchReducer from './Search/reducers'
import placesReducer from './Places/reducers'

export default combineReducers({
  search: searchReducer,
  place: placesReducer
})
