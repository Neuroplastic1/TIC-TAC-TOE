const store = require('./../store.js')

const onGamebuttonSuccess = function (response) {
  console.log(response)
  event.preventDefault()

  $('#game-board').show()
}
const onGameButtonFailiure = function (response) {
  event.preventDefault()
  $('#message').text('Sign out failed')
  //$('form').trigger('reset')
}
// const onClickStat = function (response) {
//   console.log(response)
//   $('#message').text('oops! no judgment zone')
//   $('form').trigger('reset')
//   store.user = response.user
// }
module.exports = {
  onGamebuttonSuccess,
  onGameButtonFailiure
  //onClickStat
}
