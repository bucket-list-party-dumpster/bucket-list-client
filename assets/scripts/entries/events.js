'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

// Handle all clicks, form submissions, etc.:

// On create entry:
const onCreateEntry = event => {
  event.preventDefault()
  const entry = getFormFields(event.target)

  api.createEntry(entry)
  // If succeed:
    .then(ui.onCreateEntrySuccess)
    .then(function () {
      onShowEntries(event)
    })
  // If fail:
    .catch(ui.onCreateEntryFailure)
} // onCreateEntry

// On get entry:
const onGetEntry = event => {
  event.preventDefault()
  const entryId = $(event.target).data('id')

  api.getEntry(entryId)
  // If succeed:
    .then(ui.onGetEntrySuccess)
  // If fail:
    .catch(ui.onGetEntryFailure)
} // onGetEntry

// On show entry:
const onShowEntries = event => {
  event.preventDefault()

  api.showEntries()
  // If succeed:
    .then(ui.onShowEntriesSuccess)
  // If fail:
    .catch(ui.onShowEntriesFailure)
} // onShowEntry

// On delete entry:
const onDeleteEntry = (event) => {
  event.preventDefault()
  console.log($(event.target).data('id'))
  api.deleteEntry($(event.target).data('id'))
    .then(function () {
      onShowEntries(event)
    })
    .catch(ui.failure)
} // onDeleteEntry

// On save entry:
const onSaveEntry = event => {
  event.preventDefault()
  const entry = getFormFields(event.target) // ends up being empty, target is button
  const entryId = $(event.target).data('id')
  api.saveEntry(entry, entryId)
    .then(function () {
      onShowEntries(event)
    })
    .catch(ui.failure)
} // onSaveEntry

const onSaveEntryForm = event => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.getEntry(id)
    .then(ui.onSaveEntryFormSuccess)
    .catch(ui.onSaveEntryFormFailure)
}

// First delete button press to confirm:
const onPressDelete = event => {
  event.preventDefault()
  const pressedButton = event.target
  $(pressedButton).unbind()
  $(pressedButton).html('Confirm deletion')
  $(pressedButton).css('background-color', '#f1a713')
  $(pressedButton).on('click', onDeleteEntry)
} // onPressDelete

const onCompletePress = event => {

}

// Adding handlbars and delete confirmation handlers:
const addHandlers = () => {
  $('#entry-viewer').on('click', '.cancel-button', onShowEntries)
  $('#entry-viewer').on('click', '.update-button', onSaveEntryForm)
  $('#entry-viewer').on('submit', '#updateForm', onSaveEntry)
  $('#entry-viewer').on('click', '.delete-button', onPressDelete)
  $('#entry-viewer').on('click', '.complete-button', onCompletePress)
} // addHandlers

module.exports = {
  onCreateEntry,
  onGetEntry,
  onShowEntries,
  onDeleteEntry,
  onSaveEntry,
  onSaveEntryForm,
  onPressDelete,
  addHandlers
}
