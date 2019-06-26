'use strict'

const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  // Clear out forms
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  // Clear out forms
  $('form').trigger('reset')
}

const signUpSuccess = responseData => {
  successMessage('You signed up successfully!')
}

const signUpFailure = () => {
  failureMessage('Sign up failed.')
}

const signInSuccess = responseData => {
  console.log('Response data is ', responseData)
  successMessage('You signed in successfully!')
  // Keeping track of the user, so we can have the token for the API.
  // We use 'store' so we can access the token in any file.
  store.user = responseData.user
}

const signInFailure = () => {
  failureMessage('Sign in failed.')
}

const changePasswordSuccess = responseData => {
  successMessage('You changed your password successfully!')
}

const changePasswordFailure = () => {
  failureMessage('Change password failed.')
}

const SignOutSuccess = () => {
  successMessage('You signed out successfully!')
}

const SignOutFailure = () => {
  failureMessage('Sign out failed.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  SignOutSuccess,
  SignOutFailure
}
