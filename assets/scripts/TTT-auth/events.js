// file for event handlers
'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  console.log(form)

  // use api.js to get data from base
  api.signUp(data)

    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  console.log(form)

  api.signIn(data)

    .catch(ui.signInFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out complete')

  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)

    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran')

  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)

    .then(ui.changePasswordSuccess)
    .catch(ui.chagePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
