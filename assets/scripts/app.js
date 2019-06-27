'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
// const exampleEvents = require('./examples/events')

let turnSuccess = 'n'
let currentPlayer = 1
let game = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// let recordTurn = () => {
//   let index = $('.board').index(this)
//   game.splice(index, 1, 1)
//   console.log(game)
// }

// Check for winner
const winner = function () {
  if (
    (game[0] === game[1] && game[1] === game[2] && game[0] > 0) ||
    (game[0] === game[4] && game[4] === game[8] && game[0] > 0) ||
    (game[0] === game[3] && game[3] === game[6] && game[0] > 0) ||
    (game[1] === game[4] && game[4] === game[7] && game[1] > 0) ||
    (game[2] === game[4] && game[4] === game[6] && game[2] > 0) ||
    (game[2] === game[5] && game[5] === game[8] && game[2] > 0) ||
    (game[3] === game[4] && game[4] === game[5] && game[3] > 0) ||
    (game[6] === game[7] && game[7] === game[8] && game[6] > 0)
  ) {
    console.log(`Player ${currentPlayer} wins!!`)
    // Add modal, maybe toggle (hide/show)
  }
}

// Authentication
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
})

// Turn Logic
$('.board').on('click', function (event) {
  let square = $(event.target)
  // Check for empty square
  if (square.is(':empty')) {
    // If empty & current player is 1, place X
    if (currentPlayer === 1) {
      square.text('X')
      // Record turn in game array
      let index = $('.board').index(this)
      game.splice(index, 1, 1)
      // Record successful turn
      turnSuccess = 'y'
      // If empty & current player is 2, place O
    } else if (currentPlayer === 2) {
      square.text('O')
      // Record turn in game array
      let index = $('.board').index(this)
      game.splice(index, 1, 2)
      // Record successful turn
      turnSuccess = 'y'
    }
  } else {
    turnSuccess = 'n'
    // Need to add alert/modal for unsuccessful turn
  }
  console.log(game)
  // If turn was succesful, check for winner, then change player
  if (turnSuccess === 'y') {
    winner()
    currentPlayer = (currentPlayer === 1 ? 2 : 1)
  }
})

$('#new-game').on('click', function (event) {
  // Erase board
  $('.board').empty()
  // Reset score keeper
  game = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  // Reset current plater
  currentPlayer = 1
})
