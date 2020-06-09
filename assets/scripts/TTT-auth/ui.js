'use strict'
// UI related functions
const store = require('./../store')

const onSignUpSuccess = function (response) {
  console.log(response)
  $('#message').text('Signed up successfully ' + response.user.email)
  $('form').trigger('reset')
  $('#message').show
}

const onSignUpFailure = function (response) {

  $('#message').text('Sign up failed')
  $('form').trigger('reset')
}

const onSignInSuccess = function (response) {
  console.log(response)
  $('#message').text('Signed in successfully ' + response.user.email)
  $('form').trigger('reset')
  store.user = response.user
  $().trigger('reset')
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('form').trigger('reset')
}

module.exports = {
onSignUpSuccess,
onSignUpFailure,
onSignInSuccess,
onSignInFailure
}
