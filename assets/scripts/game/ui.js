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
  // $('#message').text('Nicely played!')
  // $('#message').css('color', 'green')
  // $('#message').show()
  // hideMessaging()
}

const getRecordSuccess = responseData => {
  $('#message').text(`You've played ${responseData.games.length} games.`)
  $('#message').show()
  hideMessaging()
  console.log(responseData)
}

const getRecordFailure = () => {
  $('#message').text('Unable to retrieve record.')
  $('#message').css('color', 'red')
  $('#message').show()
  hideMessaging()
}

// const updateGameSuccess = function () {
//   let square = $(event.target)
//   // Check for empty square
//   if (square.is(':empty')) {
//     // If empty & current player is 1, place X
//     if (currentPlayer === 1) {
//       square.text('X')
//       // Record turn in game array
//       let index = $('.board').index(this)
//       game.splice(index, 1, 1)
//       // Record successful turn
//       turnSuccess = 'y'
//       // If empty & current player is 2, place O
//     } else if (currentPlayer === 2) {
//       square.text('O')
//       // Record turn in game array
//       let index = $('.board').index(this)
//       game.splice(index, 1, 2)
//       // Record successful turn
//       turnSuccess = 'y'
//     }
//   } else {
//     turnSuccess = 'n'
//     // Need to add alert/modal for unsuccessful turn
//     alert('Please select an empty square.')
//   }
//   console.log(game)
//   // If turn was succesful, check for winner
//   if (turnSuccess === 'y') {
//     winner()
//     // If no winner, change current player
//     if (win === 'n') {
//       currentPlayer = (currentPlayer === 1 ? 2 : 1)
//       $('#currentPlayer').text(`Player ${currentPlayer}'s Turn`)
//     }
//   }
//   $('#message').text('Nicely played!')
//   $('#message').css('color', 'green')
//   $('#message').show()
//   hideMessaging()
//   $('form').trigger('reset')
// }
// // Game Logic
// $('.board').on('click', function (event) {
//   let square = $(event.target)
//   // Check for empty square
//   if (square.is(':empty')) {
//     // If empty & current player is 1, place X
//     if (currentPlayer === 1) {
//       square.text('X')
//       // Record turn in game array
//       let index = $('.board').index(this)
//       game.splice(index, 1, 1)
//       // Record successful turn
//       turnSuccess = 'y'
//       // If empty & current player is 2, place O
//     } else i// $('#message').text('Nicely played!')
// $('#message').css('color', 'green')
// $('#message').show()
// hideMessaging()f (currentPlayer === 2) {
//       square.text('O')
//       // Record turn in game array
//       let index = $('.board').index(this)
//       game.spli// $('#message').text('Nicely played!')
// $('#message').css('color', 'green')
// $('#message').show()
// hideMessaging()ce(index, 1, 2)
//       // Record successful turn
//       turnSuccess = 'y'
//     }
//   } else {
//     turnSuccess = 'n'
//     // Need to add alert/modal for unsuccessful turn
//     alert('Please select an empty square.')
//   }
//   console.log(game)
//   // If turn was succesful, check for winner
//   if (turnSuccess === 'y') {
//     winner()
//     // If no winner, change current player
//     if (win === 'n') {
//       currentPlayer = (currentPlayer === 1 ? 2 : 1)
//       $('#currentPlayer').text(`Player ${currentPlayer}'s Turn`)
//     }
//   }
// })
// const updateBookSuccess = function (data) {
//   $('#books-display').html(`
//     <h4>Title: ${data.book.title}</h4>
//     <p>Author: ${data.book.author}</p>
//     <p>ID: ${data.book.id}</p>
//     <br>
//     `)
//   $('#message').text('Update Book Success!')
//   $('#message').css('color', 'green')
//   $('#message').show()
//   hideMessaging()
//   $('form').trigger('reset')
// }
// // NOT COMPLETE**************
// const updateBookFailure = function (reset) {
//   $('#books-display').html('')
//   $('#message').text('Update Book FAILURE!')
//   $('#message').css('color', 'red')
//   $('#message').show()
//   hideMessaging()
//   $('form').trigger('reset')
// }

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  getRecordSuccess,
  getRecordFailure
}
