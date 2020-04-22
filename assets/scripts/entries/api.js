'use strict'

// All games action requests must include a valid HTTP header
// Authorization: Token token=<token> or they will be rejected
// with a status of 401 Unauthorized.

const config = require('../config.js')
const store = require('../store.js')

// Handle all entry database access (AJAX):

// Create new entry:
const createEntry = (entry) => {
  return $.ajax({
    url: config.apiUrl + '/entries',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: entry
  }) // return
} // createEntry

// Show all entries:
const showEntries = () => {
  return $.ajax({
    url: config.apiUrl + '/entries',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // showEntries

// Get a single entry
const getEntry = (entryId) => {
  return $.ajax({
    url: config.apiUrl + `/entries/${entryId}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // getEntry

// Delete an entry
const deleteCharacter = (charId) => {
  return $.ajax({
    url: config.apiUrl + `/characters/${charId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  }) // return
} // deleteEntry

// Save a character:
const saveEntry = (entryData, entryId) => {
  return $.ajax({
    url: config.apiUrl + `/entries/${entryId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: entryData
  }) // return
} // saveEntry

module.exports = {
  createEntry,
  showEntries,
  getEntry,
  deleteEntry,
  saveEntry
}
