/// file for event handlers
'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()

  console.log('sign up worked')
  // call the api function
  const form = event.target

  const data = getFormFields(form)
  // call the api functions
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
// handler- functions - .then for success & .catch method for failiure
const onSignIn = function (event) {
  event.preventDefault()

  console.log('sign in worked')

  const form = event.target

  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran')

  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
