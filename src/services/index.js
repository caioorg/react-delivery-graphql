const searchMaps = address => {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?'
  const key = 'AIzaSyDAQ0K97HS8Uj20t4u61QNYHWFPp0O_ZIw'
  return fetch(`${url}address=${address}&key=${key}`)
    .then(response => {
      return response.json()
    })
    .catch(error => {
      return error.message_error
    })
}

export default { searchMaps }
