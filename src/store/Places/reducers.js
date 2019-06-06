import { SELECTED_PLACE } from './actionsTypes'

export default function(state = {}, action) {
  switch (action.type) {
    case SELECTED_PLACE:
      return { ...state, place: action.payload }
    default:
      return state
  }
}
