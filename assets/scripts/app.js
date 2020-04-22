'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/event.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#view-all-entries').on('submit', authEvents.onShowEntries)
  $('#create-new-entry').on('submit', authEvents.onCreateEntry)
  $('#view-entry-by-id').on('submit', authEvents.onGetEntry)
  $('#delete-entry-by-id').on('submit', authEvents.onDeleteEntry)
  $('#update-entry-by-id').on('submit', authEvents.onSaveEntry)
})
