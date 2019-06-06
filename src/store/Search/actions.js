import client from '../../services'
import { SEARCH_ADDRESS } from './actionsTypes'

export const searchAddress = address => {
  return dispatch => {
    client.searchMaps(address).then(resp =>
      dispatch({
        type: SEARCH_ADDRESS,
        lat: resp.results[0].geometry.location.lat,
        lng: resp.results[0].geometry.location.lng
      })
    )
  }
}
