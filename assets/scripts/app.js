'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/event.js')
const entryEvents = require('./entries/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#view-all-entries').on('submit', entryEvents.onShowEntries)
  $('#create-new-entry').on('submit', entryEvents.onCreateEntry)
  $('#view-entry-by-id').on('submit', entryEvents.onGetEntry)
  $('#delete-entry-by-id').on('submit', entryEvents.onDeleteEntry)
  $('#update-entry-by-id').on('submit', entryEvents.onSaveEntry)
})
