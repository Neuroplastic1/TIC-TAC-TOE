'use strict'
// UI related functions
const store = require('./../store.js')

const onSignUpSuccess = function (response) {
  console.log(response)
  $('#message').text('Signed up successfully' + response.user.email)
  $('form').trigger('reset')
  $('#message').show()
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  console.log(response)
  $('#message').text('Signed in successfully user email ' + response.user.email)
  $('form').trigger('reset')
  store.user = response.user
  $('#sign-out').show()
  $('#change-password').show()
  $('#play-game-button').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('form').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Signed out successfully')
  $('form').trigger('reset')
  store.user = response.user
  $('#sign-up').show()
  $('#sign-in').show()

}

module.exports = {
onSignUpSuccess,
onSignUpFailure,
onSignInSuccess,
onSignInFailure
}
