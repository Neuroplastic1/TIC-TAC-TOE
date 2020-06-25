'use strict'

// here we initially loads all the jQuery event listeners

const authEvents = require('./TTT-auth/events.js')
const gamesEvents = require('./TTT-game/events-games.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.row').hide()
  $('#new-game').hide()
  $('#play-game').on('submit', gamesEvents.onCreateGame)
  $('.box').on('click', gamesEvents.onUpdateGame)
  $('#Change-password').hide()
  $('#play-game').hide()
  $('.buttons').hide()
  $('#stats').on('submit', gamesEvents.onGetGames)
  // $('.box').css('backgroundcolor', 'green')
})
