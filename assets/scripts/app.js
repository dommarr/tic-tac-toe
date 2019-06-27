'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
// const exampleEvents = require('./examples/events')

let turnSuccess = 'n'
let lastTurn = 'o'
// let game = []
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
  let target = $(event.target)
  // Check for empty square
  if (target.is(':empty')) {
    // If empty & last turn was O, place X
    if (lastTurn === 'o') {
      target.text('X')
      turnSuccess = 'y'
      lastTurn = 'x'
      // If empty & last turn was X, place O
    } else if (lastTurn === 'x') {
      target.text('O')
      turnSuccess = 'y'
      lastTurn = 'o'
    }
  } // Need to add else for if not empty, then give alert/modal.
})

$('#new-game').on('click', function (event) {
  $('.board').empty()
})
