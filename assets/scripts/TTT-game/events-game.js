const api = require('/Users/shafqatumair/sei/projects/TIC-TAC-TOE/assets/scripts/TTT-auth/api.js')
const ui = require('/Users/shafqatumair/sei/projects/TIC-TAC-TOE/assets/scripts/TTT-auth/ui.js')
const store = require('/Users/shafqatumair/sei/projects/TIC-TAC-TOE/assets/scripts/store.js')

const onPlayGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.onGamebuttonSuccess)
    .catch(ui.onGamebuttonFaoilure)
  store.game = event.game
}

module.exports = {
  onPlayGame
}
