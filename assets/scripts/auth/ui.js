'use strict'

const store = require('./../store')

const signUpSuccess = function (data) {
  $('#auth-message').text('Signed up successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('input[class=clear-on-submit]').val('')
}

const signUpFailure = function (error) {
  $('#auth-message').text(error.status + ': ' + error.statusText)
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  $('input[class=clear-on-submit]').val('')
}

const signInSuccess = function (data) {
  store.user = data.user
  // Success-Failure Messages
  $('#auth-message').text('Signed in successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  // Update UI Login views
  // $('#sign-up').addClass('hidden')
  // $('#sign-in').addClass('hidden')
  // $('#change-pw').removeClass('hidden')
  // $('#sign-out').removeClass('hidden')
  // Show UI List Views
  // $('#user-lists').removeClass('hidden')
  $('input[class=clear-on-submit]').val('')
}

const signInFailure = function (error) {
  $('#auth-message').text(error.status + ': ' + error.statusText)
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  $('input[class=clear-on-submit]').val('')
  // console.log('signInFailure data is: ', error)
}

const signOutSuccess = function (data) {
  $('#auth-message').text('Signed out successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  // Update UI login views
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#change-pw').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#user-lists').addClass('hidden')
  $('input[class=clear-on-submit]').val('')
  // console.log('signOutSuccess data is: ', data)
}

const signOutFailure = function (error) {
  $('#auth-message').text(error.status + ': ' + error.statusText)
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  $('input[class=clear-on-submit]').val('')
}

const changePasswordSuccess = function (data) {
  $('#auth-message').text('Password changed successfully')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('input[class=clear-on-submit]').val('')
}

const changePasswordFailure = function (error) {
  $('#auth-message').text(error.status + ': ' + error.statusText)
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
