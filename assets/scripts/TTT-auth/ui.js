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

const onSignOutFailiure = function (response) {
  $('#message').text('Sign out failed')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('CPassW successfully')
  $('form').trigger('reset')
  store.user = response.user
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
