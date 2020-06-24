'use strict'

const api = require('./api-games')
const ui = require('./ui-games')
const store = require('./../store.js')

const onCreateGame = function (event) {
  event.preventDefault()
  $('.box').html('')

  currentPlayer = 'x'
  $('.row').show()
  $('#display-winner').hide()
  $('#playerturn').show().text("It's player " + currentPlayer + 's turn!')

  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

let currentPlayer = 'x'

const onUpdateGame = function (event) {
  event.preventDefault()

  if ($(event.target).is(':empty')) {
    store.game.cells[$(event.target).data('cell-index')] = currentPlayer
    // add player to html board
    $(event.target).text(currentPlayer)
    // after  rotate player
    if (currentPlayer === 'x') {
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
    $('#playerturn').show().text('turn for ' + currentPlayer + ' ')
  } else {
    $('#message').show().text('Real Estate Occupied!')
    return 'invalid move'
  }
  const board = store.game.cells
  let winner
  if (board[0] === board[1] && board[0] === board[2] && board[0] !== '') {
    event.preventDefault()
    //$('.row').hide()
    $('#display-winner').show().text(`Player ${board[0]} won! play new game!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    $('.success').text('')
    winner = true
  } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== '') {
    event.preventDefault()
    //$('.row').hide()
    $('#display-winner').show().text(`Player ${board[3]} won! play new game!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    $('.success').text('')
    winner = true
  } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== '') {
    //$('.row').hide()
    $('#display-winner').show().text(`Player ${board[6]} won! play New game!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    $('.success').text('')
    winner = true
  } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== '') {
    //$('.row').()
    $('#display-winner').show().text(`Player ${board[0]} won!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    $('.success').text('')
    winner = true
  } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== '') {
    //$('.row').hide()
    $('#display-winner').show().text(`Player ${board[2]} won!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    $('.success').text('')
    winner = true
  } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== '') {
    //$('.row').hide()
    $('#display-winner').show().text(`Player ${board[1]} won!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    $('.success').text('')
    winner = true
  } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== '') {
    //$('.row').hide()
    $('#display-winner').show().text(`Player ${board[0]} won!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    $('.success').text('')
    winner = true
  } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== '') {
    //$('.row').hide()
    $('#display-winner').show().text(`Player ${board[2]} won!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    $('.success').text('')
    winner = true
  }

  if (winner === false && store.game.cells.every(e => e !== '')) {
    //$('.row').hide()
    $('#display-winner').show().text("It's a tie!")
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    $('.success').text('')
  }
  const index = $(event.target).data('cell-index')
  api.updateGame(index, currentPlayer)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()

  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

const onGameEnd = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.onGameEndSuccess)
    .catch(ui.onGameEndFailure)
}

module.exports = {
  onCreateGame,
  onGetGames,
  onUpdateGame,
  currentPlayer,
  onGameEnd
}
