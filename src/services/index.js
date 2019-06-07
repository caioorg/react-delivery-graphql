const searchMaps = address => {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?'
  return fetch(`${url}address=${address}&key=${process.env.REACT_APP_KEY_API}`)
    .then(response => {
      return response.json()
    })
    .catch(error => {
      return error.message_error
    })
}

export default { searchMaps }
