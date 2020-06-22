'user strict'

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

module.exports = {
  onGamebuttonSuccess,
  onGameButtonFailiure

}
