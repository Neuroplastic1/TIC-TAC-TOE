'use strict'
const config = require('./../config')
const store = require('./../store.js')

const createGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
    }
  })
}
module.exports = {
  createGame
}
