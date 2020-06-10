'use strict'

const api = require('./api-game')
const ui = require('./ui-game')

const onPlayGame = function (event) {
  event.preventDefault()
  console.log('ready to game on')
  // call the api function.appost request func should make
  // onSuccess we want to show game board (ui func).
  api.createGame()
    .then(ui.onGamebuttonSuccess)
    .catch(ui.onGamebuttonFailure)
}

module.exports = {
  onPlayGame
}
