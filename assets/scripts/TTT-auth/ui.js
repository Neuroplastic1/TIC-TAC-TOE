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
  store.user = response.user
  //$('form').trigger('reset')
  $('#sign-out').show()
  $('#change-password').show()
  $('#play-game-button').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#game-board').hide()
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  //$('form').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Signed out successfully')
  $('form').trigger('reset')
  store.user = response.user
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#play-game-button').hide()
  $('#change-password').hide()
}

const onSignOutFailiure = function (response) {
  $('#message').text('Sign out failed')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('Password Changed!')
  $('form').trigger('reset')
  $('#sign-up').show()
  $('#sign-in').show()
}

const onChangePasswordFailiure = function (response) {
  $('#message').text('CPassw failed')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailiure,
  onChangePasswordSuccess,
  onChangePasswordFailiure

}
