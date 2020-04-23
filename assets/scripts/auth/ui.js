'use strict'

const store = require('./../store')

const signUpSuccess = function (data) {
  $('#auth-message').text('Signed up successfully.')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('input[class=clear-on-submit]').val('')
}

const signUpFailure = function () {
  $('#auth-message').text('Failed to sign up. Please try again.')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  $('input[class=clear-on-submit]').val('')
}

const signInSuccess = function (data) {
  store.user = data.user
  // Success-Failure Messages
  $('#auth-message').text('Signed in successfully.')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  // Update UI Login views
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#change-pw').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  // Show UI List Views
  $('#bucket-list').removeClass('hidden')
  $('input[class=clear-on-submit]').val('')
}

const signInFailure = function () {
  $('#auth-message').text('Failed to sign in. Please try again.')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  $('input[class=clear-on-submit]').val('')
  // console.log('signInFailure data is: ', error)
}

const signOutSuccess = function (data) {
  $('#auth-message').text('Signed out successfully.')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  // Update UI login views
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#change-pw').addClass('hidden')
  $('#sign-out').addClass('hidden')
  // Update UI entries views
  $('#bucket-list').addClass('hidden')
  $('input[class=clear-on-submit]').val('')
  // console.log('signOutSuccess data is: ', data)
}

const signOutFailure = function () {
  $('#auth-message').text('Failed to sign out. Please try again.')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  $('input[class=clear-on-submit]').val('')
}

const changePasswordSuccess = function (data) {
  $('#auth-message').text('Password changed successfully.')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('input[class=clear-on-submit]').val('')
}

const changePasswordFailure = function () {
  $('#auth-message').text('Failed to change password. Please try again.')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  $('input[class=clear-on-submit]').val('')
  // console.log('signOutFailure data is: ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
