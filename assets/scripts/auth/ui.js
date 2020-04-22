'use strict'

const store = require('./store')
const getFormFields = require('./../../../lib/get-form-fields.js')

const signUpSuccess = function (data) {
}

const signUpFailure = function (error) {
}

const signInSuccess = function (data) {
  store.user = data.user
}

const signInFailure = function (error) {
}

const signOutSuccess = function (data) {
}

const signOutFailure = function (error) {
}

const changePasswordSuccess = function (data) {
}

const changePasswordFailure = function (error) {
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
