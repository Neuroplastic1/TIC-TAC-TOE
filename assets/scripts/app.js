'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./TTT-auth/events.js')
const gameEvents = require('./TTT-game/events-game.js')
// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#play-game-button').on('submit', gameEvents.onPlayGame)
  $('#game-board').on('submit', gameEvents.onPlayGame)
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#play-game-button').hide()
  $('#game-board').hide()
  $('.box').on('click',)
})
