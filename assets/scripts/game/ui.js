'use strict'
const store = require('../store')

const hideMessaging = function () {
  setTimeout(function () {
    $('#message').text('')
    $('#message').hide()
  }, 8000)
}

const createGameSuccess = responseData => {
  store.game = responseData.game
  $('#game').show()
  $('.game-board').show()
  $('#message').text('New Game! You are player X.')
  $('#message').css('color', 'green')
  $('#message').show()
  hideMessaging()
}

const createGameFailure = function (data) {
  $('#message').text('New game failed.')
  $('#message').css('color', 'red')
  $('#message').show()
  hideMessaging()
}

const updateGameSuccess = responseData => {
}

const getRecordSuccess = responseData => {
  $('#message').text(`You've played ${responseData.games.length} games.`)
  $('#message').show()
  hideMessaging()
}

const getRecordFailure = () => {
  $('#message').text('No record, you played 0 games.')
  $('#message').css('color', 'red')
  $('#message').show()
  hideMessaging()
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  getRecordSuccess,
  getRecordFailure
}
