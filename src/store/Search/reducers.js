import { SEARCH_ADDRESS } from './actionsTypes'

export default function(state = {}, action) {
  switch (action.type) {
    case SEARCH_ADDRESS:
      return { ...state, lat: action.lat, lng: action.lng }
    default:
      return state
  }
}
