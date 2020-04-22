'use strict'

const store = require('./../store.js')
const getFormFields = require('./../../../lib/get-form-fields.js')

// SUCCESSES --------------------------

// When showing entries is successful:
const onShowEntriesSuccess = responseData => {
} // onShowEntriesSuccess

// When get entry is success:
const onGetEntrySuccess = responseData => {
} // onGetEntrySuccess

// When create entry is success:
const onCreateEntrySuccess = responseData => {
} // onCreateEntrySuccess

// FAILURES -------------------------

// When showing entries is failure:
const onShowEntriesFailure = responseData => {
} // onShowEntriesSuccess

// When get entry is failure:
const onGetEntryFailure = responseData => {
} // onGetEntrySuccess

// When create entry is failure:
const onCreateEntryFailure = responseData => {
} // onCreateEntrySuccess

module.exports = {
  onShowEntriesSuccess,
  onGetEntrySuccess,
  onCreateEntrySuccess,
  onShowEntriesFailure,
  onGetEntryFailure,
  onCreateEntryFailure
}
