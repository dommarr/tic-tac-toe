'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(document).ready(function () {
  $('#game').hide()
  $('#nav').hide()
  $('#change-password').hide()
})

// Authentication
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
})

// Game
$(() => {
  $('#new-game').on('click', gameEvents.onCreateGame)
  $('#password').on('click', gameEvents.onShowPassword)
  $('.board').on('click', gameEvents.onUpdateGame)
  $('#record').on('click', gameEvents.onGetRecord)
})
