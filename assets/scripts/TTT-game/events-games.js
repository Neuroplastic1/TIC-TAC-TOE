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

let currentPlayer = 'o'

const onUpdateGame = function (event) {
  event.preventDefault()

  if ($(event.target).is(':empty')) {
    store.game.cells[$(event.target).data('cell-index')] = currentPlayer
    // add player to html square
    $(event.target).text(currentPlayer)
    // after each turn rotate player
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
  const square = store.game.cells
  let winner
  if (square[0] === square[1] && square[0] === square[2] && square[0] !== '') {
    event.preventDefault()
    $('#display-winner').show().text(`Player ${square[1]} won!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    winner = true
  } else if (square[3] === square[4] && square[4] === square[5] && square[3] !== '') {
    event.preventDefault()
    $('#display-winner').show().text(`Player ${square[4]} won!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    winner = true
  } else if (square[6] === square[7] && square[7] === square[8] && square[6] !== '') {
    $('#display-winner').show().text(`Player ${square[7]} won! `)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    winner = true
  } else if (square[0] === square[4] && square[4] === square[8] && square[0] !== '') {
    $('#display-winner').show().text(`Player ${square[4]} won!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    winner = true
  } else if (square[2] === square[4] && square[4] === square[6] && square[2] !== '') {
    $('#display-winner').show().text(`Player ${square[4]} won!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    winner = true
  } else if (square[1] === square[4] && square[4] === square[7] && square[1] !== '') {
    $('#display-winner').show().text(`Player ${square[4]} won!`)
    store.game.over = true

    $('#playerturn').text('')
    $('#message').text('')
    winner = true
  } else if (square[0] === square[3] && square[3] === square[6] && square[0] !== '') {
    $('#display-winner').show().text(`Player ${square[3]} won!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    winner = true
  } else if (square[2] === square[5] && square[5] === square[8] && square[2] !== '') {
    $('#display-winner').show().text(`Player ${square[5]} won!`)
    store.game.over = true
    $('#playerturn').text('')
    $('#message').text('')
    winner = true
  }
  if (winner === false && store.game.cells.every(e => e !== '')) {
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

module.exports = {
  onCreateGame,
  onGetGames,
  onUpdateGame,
  currentPlayer
}
