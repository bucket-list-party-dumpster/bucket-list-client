'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/event.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('click', authEvents.onSignUp)
  $('#sign-in').on('click', authEvents.onSignIn)
  $('#change-pw').on('click', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
})
