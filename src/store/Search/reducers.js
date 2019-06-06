import { SEARCH_ADDRESS, SEARCH_ERROR } from './actionsTypes'

export default function(state = {}, action) {
  switch (action.type) {
    case SEARCH_ADDRESS:
      return { ...state, lat: action.lat, lng: action.lng }
    case SEARCH_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
