import client from '../../services'
import { SEARCH_ADDRESS, SEARCH_ERROR } from './actionsTypes'

export const searchAddress = address => {
  return dispatch => {
    client
      .searchMaps(address)
      .then(resp => (resp.results ? resp.results : false))
      .then(result => {
        if (result.length > 0) {
          dispatch({
            type: SEARCH_ADDRESS,
            lat: result[0].geometry.location.lat,
            lng: result[0].geometry.location.lng
          })
        } else {
          dispatch({
            type: SEARCH_ERROR,
            error: 'Endereço não encontrado'
          })
        }
      })

    // )
  }
}
