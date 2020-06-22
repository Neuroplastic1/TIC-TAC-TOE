'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./TTT-auth/events.js')
const gameEvents = require('./TTT-game/events-game.js')
const clickEvents = require('./TTT-game/api-game.js')
// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#game-board').on('submit', gameEvents.onPlayGame)
  $('#sign-out').hide()
  $('#change-password').hide()
  //$('#new-game').hide()
  //$('#game-board').hide()
  $('.box').on('click', gameEvents.onClickBox)
  $('#game-stat').on('click', clickEvents.onClickStat)
  $('play-game-button').on('click', clickEvents.onPlayGame)
})

// $('#slot-0').on('click', clickEvents.updateGame)
// $('#slot-1').on('click', clickEvents.updateGame)
// $('#slot-2').on('click', clickEvents.updateGame)
// $('#slot-3').on('click', clickEvents.updateGame)
// $('#slot-4').on('click', clickEvents.updateGame)
// $('#slot-5').on('click', clickEvents.updateGame)
// $('#slot-6').on('click', clickEvents.updateGame)
// $('#slot-7').on('click', clickEvents.updateGame)
// $('#slot-8').on('click', clickEvents.updateGame)
