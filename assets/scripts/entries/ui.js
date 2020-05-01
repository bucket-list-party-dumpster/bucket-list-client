'use strict'

// const store = require('./../store.js')
const useEntriesHandlerTemplate = require('./../templates/entries-handler.handlebars')
const useEntryHandlerTemplate = require('./../templates/entry-handler.handlebars')
const useFormUpdateTemplate = require('./../templates/form-update-handler.handlebars')

// SUCCESSES --------------------------

// When showing entries is successful:
const onShowEntriesSuccess = responseData => {
  // Success-Failure Messages
  if (responseData.entries.length === 0) {
    $('#entry-viewer').html('')
    $('#entry-message').text('You have nothing on your list yet!')
    $('#entry-message').removeClass()
    $('#entry-message').addClass('failure')
  } else {
    const viewEntriesHtml = useEntriesHandlerTemplate({ entries: responseData.entries })
    $('#entry-viewer').html(viewEntriesHtml)
    $('#entry-viewer').removeClass()
    $('#entry-message').empty()
    $('input[class=clear-on-submit]').val('')
  }
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

const onSaveEntryFormSuccess = responseData => {
  // console.log('sdfsdfsdfffffffff', responseData)
  const updateEntryHtml = useFormUpdateTemplate({ entry: responseData.entry })
  const entryDataId = responseData.entry._id
  $(`section[data-id=${entryDataId}]`).html(updateEntryHtml)
  $('#entry-message').empty()
}

// FAILURES -------------------------

// When showing entries is failure:
const onShowEntriesFailure = () => {
  $('#entry-message').text('Failed to retrieve your entries.')
  $('#entry-message').removeClass()
  $('#entry-message').addClass('failure')
  $('#entry-viewer').empty()
  $('input[class=clear-on-submit]').val('')
}

// When get entry is failure:
const onGetEntryFailure = () => {
  $('#entry-message').text('Failed to retrieve entry. Please try again.')
  $('#entry-message').removeClass()
  $('#entry-message').addClass('failure')
  $('#entry-viewer').empty()
  $('input[class=clear-on-submit]').val('')
}

// When create entry is failure:
const onCreateEntryFailure = () => {
  $('#entry-message').text('Failed to create entry. Please try again.')
  $('#entry-message').removeClass()
  $('#entry-message').addClass('failure')
  $('#entry-viewer').empty()
  $('input[class=clear-on-submit]').val('')
}
const onSaveEntryFormFailure = () => {
  $('#entry-message').text('Failed to save your entry. Please try again.')
}

module.exports = {
  onShowEntriesSuccess,
  onGetEntrySuccess,
  onCreateEntrySuccess,
  onSaveEntryFormSuccess,
  onShowEntriesFailure,
  onGetEntryFailure,
  onCreateEntryFailure,
  onSaveEntryFormFailure
}
