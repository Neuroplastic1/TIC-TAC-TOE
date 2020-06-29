'use strict'

const api = require('./api-games')
const ui = require('./ui-games')
const store = require('./../store.js')

let winner = false
let currentPlayer = 'x'

const onCreateGame = function (event) {
  event.preventDefault()
  // clear up every box
  $('.box').html('')
  // next line is activating click events on any box class after game board initiated
  $('.box').on('click', onUpdateGame)
  // $(event.target).is(':empty')
  // each time start with 'x from store '
  store.currentPlayer = 'x'
  $('.row').show()
  $('#playerturn').show().text("It's player " + currentPlayer + 's turn!')

  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()

  if ($(event.target).is(':empty')) {
    store.game.cells[$(event.target).data('cell-index')] = currentPlayer
    // add 'x'& 'o' to the  square
    $(event.target).text(currentPlayer)
    // after each turn rotate player
    if (currentPlayer === 'x') {
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
    $('#playerturn').show().text('turn for ' + currentPlayer + ' ')
  } else {
    $('#message').show().text('Well done!!')
  }
  const square = store.game.cells
  if (square[0] === square[1] && square[1] === square[2] && square[2] !== '') {
    store.game.over = true
    $('#playerturn').show().text(`Player ${square[1]} won!`)
    winner = true
  } else if (square[3] === square[4] && square[4] === square[5] && square[3] !== '') {
    $('#playerturn').show().text(`Player ${square[4]} won!`)
    store.game.over = true
    winner = true
  } else if (square[6] === square[7] && square[7] === square[8] && square[6] !== '') {
    $('#playerturn').show().text(`Player ${square[7]} won! `)
    store.game.over = true
    winner = true
  } else if (square[0] === square[4] && square[4] === square[8] && square[0] !== '') {
    $('#playerturn').show().text(`Player ${square[4]} won!`)
    store.game.over = true
    winner = true
  } else if (square[2] === square[4] && square[4] === square[6] && square[2] !== '') {
    $('#playerturn').show().text(`Player ${square[4]} won!`)
    store.game.over = true
    winner = true
  } else if (square[1] === square[4] && square[4] === square[7] && square[1] !== '') {
    $('#playerturn').show().text(`Player ${square[4]} won!`)
    store.game.over = true
    winner = true
  } else if (square[0] === square[3] && square[3] === square[6] && square[0] !== '') {
    $('#playerturn').show().text(`Player ${square[3]} won!`)
    store.game.over = true
    winner = true
  } else if (square[2] === square[5] && square[5] === square[8] && square[2] !== '') {
    $('#playerturn').show().text(`Player ${square[5]} won!`)
    store.game.over = true
    winner = true
  } if (winner === false && store.game.cells.every(cells => cells !== '')) {
    $('#playerturn').show().text("It's a tie!")
    winner = true
    store.game.over = true
  }
  const index = $(event.target).data('cell-index')
  if (winner === true && store.game.over === true) {
    // halt the game board (onUpdateGame func)and any other  actions
    // prevent user from taking further action on board
    $('.box').off('click', onUpdateGame)
    api.updateGame(index, currentPlayer)
      .then(ui.onUpdateGameSuccess)
      .catch(ui.onUpdateGameFailure)
  }
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
