const api = require('/Users/shafqatumair/sei/projects/TIC-TAC-TOE/assets/scripts/TTT-auth/api.js')
const ui = require('/Users/shafqatumair/sei/projects/TIC-TAC-TOE/assets/scripts/TTT-auth/ui.js')
const store = require('/Users/shafqatumair/sei/projects/TIC-TAC-TOE/assets/scripts/store.js')
let player = true
const onPlayGame = function (event) {
  event.preventDefault()
  store.trackBoard = ['', '', '', '', '', '', '', '', '']
  store.currentPlayer = 'x'
  api.createGame()
    .then(ui.onGamebuttonSuccess)
    .catch(ui.onGamebuttonFaoilure)
  store.game = event.game
}
const onClickBox = function (event) {
  const index = $(event.target).attr('data-index')
  console.log('clicked')
  event.preventDefault()
  // const value = player ? 'o' : 'x'
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
