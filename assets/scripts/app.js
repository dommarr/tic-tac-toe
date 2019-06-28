'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
// const exampleEvents = require('./examples/events')

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
  $('.board').on('click', gameEvents.onUpdateGame)
})

// let recordTurn = () => {
//   let index = $('.board').index(this)
//   game.splice(index, 1, 1)
//   console.log(game)
// }

// // Start a new gameAuthentication
// $('#new-game').on('click', function (event) {
//   // Erase board
//   $('.board').empty()
//   // Reset current plater
//   currentPlayer = 1
//   $('#currentPlayer').text(`Player ${currentPlayer}'s Turn`)
//   // Reset score keeper
//   game = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//   // Reset win
//   win = 'n'
//   // // Reset event handler
//   // $('.board').on()
// })
