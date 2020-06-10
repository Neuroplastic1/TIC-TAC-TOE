'use strict'
const store = require('./../store.js')
const onGamebuttonSuccess = function (response) {
  console.log(response)
  store.user = response.user
$('#game-board').show()
}

module.exports = {
  onGamebuttonSuccess
}
