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
// const winner = () => {
//
// }

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
    // If empty & last turn was O, place X
    if (currentPlayer === 1) {
      square.text('X')
      // Record turn in game array
      let index = $('.board').index(this)
      game.splice(index, 1, 1)
      turnSuccess = 'y'
      // Change player
      currentPlayer = 2
      // If empty & last turn was X, place O
    } else if (currentPlayer === 2) {
      square.text('O')
      // Record turn in game array
      let index = $('.board').index(this)
      game.splice(index, 1, 2)
      turnSuccess = 'y'
      // Change player
      currentPlayer = 1
    }
  } // Need to add else for if not empty, then give alert/modal.
console.log(game)
})

$('#new-game').on('click', function (event) {
  $('.board').empty()
})
