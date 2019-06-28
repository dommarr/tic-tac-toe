'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('../store')

// Game status trackers
let currentPlayer = 'X'
let game = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let turnSuccess = 'n'
let win = false
let index = -1
let updateObject = {}

// Check for winner
const winner = function () {
  if (
    (game[0] === game[1] && game[1] === game[2] && game[0] !== 0) ||
    (game[0] === game[4] && game[4] === game[8] && game[0] !== 0) ||
    (game[0] === game[3] && game[3] === game[6] && game[0] !== 0) ||
    (game[1] === game[4] && game[4] === game[7] && game[1] !== 0) ||
    (game[2] === game[4] && game[4] === game[6] && game[2] !== 0) ||
    (game[2] === game[5] && game[5] === game[8] && game[2] !== 0) ||
    (game[3] === game[4] && game[4] === game[5] && game[3] !== 0) ||
    (game[6] === game[7] && game[7] === game[8] && game[6] !== 0)
  ) {
    win = true
    console.log(`Player ${currentPlayer} wins!!`)
    $('#currentPlayer').text(`Player ${currentPlayer} wins!!`)
    // $('.board').off('click')
    // Add modal, maybe toggle (hide/show)
  }
}

// Create New Game
const onCreateGame = event => {
  console.log('Requested new game.')
  event.preventDefault()
  const gameData = getFormFields(event.target)
  api.createGame(gameData)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// Game Logic
const onUpdateGame = function (event) {
  event.preventDefault()
  let square = $(event.target)
  // Check for empty square
  if (square.is(':empty')) {
    // If empty, fill square.
    square.text(currentPlayer)
    // Record turn in game array
    index = $('.board').index(this)
    game.splice(index, 1, currentPlayer)
    // Record successful turn
    turnSuccess = 'y'
  } else {
    turnSuccess = 'n'
    // Need to add alert/modal for unsuccessful turn
    alert('Please select an empty square.')
  }
  console.log(`game array is ${game}`)
  // If turn was succesful, check for winner
  if (turnSuccess === 'y') {
    winner()
    // If no winner, change current player
    if (win === false) {
      updateObject = {
        game: {
          cell: {
            index: index,
            value: currentPlayer
          },
          over: win
        }
      }
      currentPlayer = (currentPlayer === 'X' ? 'O' : 'X')
      $('#currentPlayer').text(`Player ${currentPlayer}'s Turn`)
    } else {
      updateObject = {
        game: {
          cell: {
            index: index,
            value: currentPlayer
          },
          over: win
        }
      }
    }
  }
  console.log(updateObject)
  api.updateGame(updateObject, store.game.id)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

// const onUpdateGame = function (event) {
//   event.preventDefault()
//   // const formData = getFormFields(event.target)
//   let square = $(event.target)
//   let update = {
//     game: {
//       cell: {
//         // Check later and maybe use your code from earlier.
//         index: $(square).data('cell-index'),
//         value: $(square).data('cell-value')
//       },
//       over: false
//     }
//   }
//   console.log(update)
//   api.updateGame(update)
//     .then(ui.updateGameSuccess)
//     .catch(ui.updateGameFailure)
// }

module.exports = {
  onCreateGame,
  onUpdateGame
}
