const searchMaps = (address, key) => {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?'
  return fetch(`${url}address=${address}&key=${key}`)
    .then(response => {
      return response.json()
    })
    .catch(error => {
      return error.message_error
    })
}

export default { searchMaps }
