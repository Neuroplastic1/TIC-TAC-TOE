
const store = require('./../store.js')

const onGetGamesSuccess = (response) => {
  $('#message').text(`total Games played:${response.games.length}`)
  $('#message1').hide()
}
const onGetGamesFailure = (response) => {
  $('#message').text('Unable to get the requested games.')
}
const onCreateGameSuccess = (response) => {
  $('#message').text('Another one!')
  $('.row').show()
  // $('.').trigger('reset')
  // $('.row').restartGame()
  store.game = response.game
  store.games = response.games
}
const onCreateGameFailure = (response) => {
  $('#message').text('Unable to create a new game.')
}
const onUpdateGameSuccess = (response) => {
  $('#message').text('Well done!')
}
const onUpdateGameFailure = (response) => {
  $('#message').text('Well done!')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
