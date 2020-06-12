'use strict'

const api = require('./api-game')
const ui = require('./ui-game')
const store = require('./../store')
let player = true
//oh my precious winning logic






const onPlayGame = function (event) {
  event.preventDefault()
  console.log('ready to game on')
  // call the api function.appost request func should make
  // onSuccess we want to show game board (ui func).
  api.createGame()
    .then(ui.onGamebuttonSuccess)
    .catch(ui.onGamebuttonFailure)
}
const onClickBox = function (event) {
  const index = $(event.target).attr('data-index')
  console.log('clicked')
  //const value = player ? 'o' : 'x'
  player = !player


const data = {
    index,
    player
    // over: store.game.over

  }
  console.log(data)
}

module.exports = {
  onPlayGame,
  onClickBox
}
