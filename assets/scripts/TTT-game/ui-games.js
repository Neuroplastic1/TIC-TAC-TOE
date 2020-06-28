
const store = require('./../store.js')

const onGetGamesSuccess = (response) => {
  $('#message').text(`total Games played:${response.games.length}`)
  $('#message1').hide()
}
const onGetGamesFailure = (response) => {
  $('#message').text('Unable to get the requested games.')
}
const onCreateGameSuccess = (response) => {
  $('#message').text('Ready to play!')
  $('#message').show()
  $('.row').show()
  // $('.box').trigger('reset')
  // $('.row').restartGame()
  store.game = response.game
}
const onCreateGameFailure = (response) => {
  $('#message').text('Unable to create a new game.')
}
const onUpdateGameSuccess = (response) => {
  $('#message').text('well done!')
}
const onUpdateGameFailure = (response) => {
  $('#message').text('Estate occupied!')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
