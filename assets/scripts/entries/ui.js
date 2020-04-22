'use strict'

// const store = require('./../store.js')
const useEntriesHandlerTemplate = require('./../templates/entries-handler.handlebars')
const useEntryHandlerTemplate = require('./../templates/entry-handler.handlebars')

// SUCCESSES --------------------------

// When showing entries is successful:
const onShowEntriesSuccess = responseData => {
  // Success-Failure Messages
  const viewEntriesHtml = useEntriesHandlerTemplate({ entries: responseData.entries })
  $('#entry-viewer').html(viewEntriesHtml)
  $('#entry-viewer').removeClass()
  $('input[class=clear-on-submit]').val('')
}

// When get entry is success:
const onGetEntrySuccess = responseData => {
  const viewEntryByIdHtml = useEntryHandlerTemplate({ entry: responseData.entry })
  $('#entry-viewer').html(viewEntryByIdHtml)
  $('#entry-message').empty()
  $('input[class=clear-on-submit]').val('')
}
// When create entry is success:
const onCreateEntrySuccess = responseData => {
  const createNewEntryHtml = useEntryHandlerTemplate({ entry: responseData.entry })
  $('#entry-viewer').html(createNewEntryHtml)
  $('#entry-message').text('Entry successfully created.')
  $('#entry-message').removeClass()
  $('#entry-message').addClass('success')
  $('input[class=clear-on-submit]').val('')
}

// FAILURES -------------------------

// When showing entries is failure:
const onShowEntriesFailure = error => {
  $('#entry-message').text(error.status + ': ' + error.statusText)
  $('#entry-message').removeClass()
  $('#entry-message').addClass('failure')
  $('#entry-viewer').empty()
  $('input[class=clear-on-submit]').val('')
}

// When get entry is failure:
const onGetEntryFailure = error => {
  $('#entry-message').text(error.status + ': ' + error.statusText)
  $('#entry-message').removeClass()
  $('#entry-message').addClass('failure')
  $('#entry-viewer').empty()
  $('input[class=clear-on-submit]').val('')
}

// When create entry is failure:
const onCreateEntryFailure = error => {
  $('#entry-message').text(error.status + ': ' + error.statusText)
  $('#entry-message').removeClass()
  $('#entry-message').addClass('failure')
  $('#entry-viewer').empty()
  $('input[class=clear-on-submit]').val('')
}

module.exports = {
  onShowEntriesSuccess,
  onGetEntrySuccess,
  onCreateEntrySuccess,
  onShowEntriesFailure,
  onGetEntryFailure,
  onCreateEntryFailure
}
