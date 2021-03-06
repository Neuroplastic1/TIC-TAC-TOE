'use strict'

// handles AJAX reponses and DOM manipulation

const store = require('./../store.js')

const userCreateSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('wemcome' + response.user.email + '')
  $('#message').show().removeClass().addClass('success')
}
const userCreateFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed! Try different email address.')
  $('#message').show().removeClass().addClass('failure')
}

const userSignInSuccess = function (response) {
  $('#message').text('Signed in! Welcome back ' + response.user.email + '!' + '')
  $('#message').show().removeClass().addClass('success')
  $('#Sign-up').hide()
  $('#Sign-in').hide()
  $('#Change-password').show()
  $('#play-game').show()
  $('.buttons').show()
  $('#notification').hide()
  $('form').trigger('reset')
  store.user = response.user
}
const userSignInFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign in failed!')
  $('#message').show().removeClass().addClass('failure')
  store.user = response.user
}

const userChangePasswordSuccess = function (response) {
  $('#message').text('New password assigned')
  $('#message').show().removeClass().addClass('success')
  $('form').trigger('reset')
}
const userChangePasswordFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('Password change unsuccessful.')
  $('#message').show().removeClass().addClass('failure')
}

const signOutSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Signed out successfully!')
  $('#message').show().removeClass().addClass('success')
  $('#Sign-in').show()
  $('#Sign-up').show()
  $('#Change-password').hide()
  $('#play-game').hide()
  $('.row').hide()
  $('#new-game').hide()
  $('#playerturn').hide()
  $('#display-winner').hide()
  $('.buttons').hide()
  store.user.token = null
}

const signOutFailure = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign out failed.')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  userCreateSuccess,
  userCreateFailure,
  userSignInSuccess,
  userSignInFailure,
  userChangePasswordSuccess,
  userChangePasswordFailure,
  signOutSuccess,
  signOutFailure
}
