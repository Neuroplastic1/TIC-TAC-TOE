//ajax jquery request
//request ->o method ->0

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
    data: {}
  })
}

const updateGame = function (Data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      passwords: {
        old: store.game.old,
        new: store.game.new
      }
    }
  })
}
const getGames = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

module.exports = {
  updateGame,
  createGame,
  getGames
}
