'user strict'
const store = ('/Users/shafqatumair/sei/projects/TIC-TAC-TOE/assets/scripts/store.js')
const onGamebuttonSuccess = function (response) {
  console.log(response)
  event.preventDefault()

  $('#game-board').show()
}
const onGameButtonFailiure = function (response) {
  event.preventDefault()
  $('#message').text('Sign out failed')
  // $('form').trigger('reset')
}
const newGameSuccess = function (response) {
  $('#message').hide()
  $('#incomplete-game-list').hide()
  $('#game-message').text('New game successfully created!').removeClass().addClass('success').show()
  $('.container').show()
  $('#0').html('')
  $('#1').html('')
  $('#2').html('')
  $('#3').html('')
  $('#4').html('')
  $('#5').html('')
  $('#6').html('')
  $('#7').html('')
  $('#8').html('')
const newGameFailure = function (response) {
  event.preventDefault()
  $('#message').text('play game button failed')
}

module.exports = {
  onGamebuttonSuccess,
  onGameButtonFailiure,
  newGameSuccess

}
