'use strict'

const store = require('./../store')

const onGamebuttonSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#game-board').show()
}
const onCickStat = function (response) {
  console.log(response)
  $('#message').text('oops! no judgment zone')
  $('form').trigger('reset')
  store.user = response.user
module.exports = {
  onGamebuttonSuccess,
  onClickStat
}
