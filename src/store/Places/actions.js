import { SELECTED_PLACE } from './actionsTypes'

export const selectedPlace = id => {
  return dispatch => {
    dispatch({
      type: SELECTED_PLACE,
      payload: id
    })
  }
}
