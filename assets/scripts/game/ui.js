'use strict'
const store = require('../store')

const hideMessaging = function () {
  setTimeout(function () {
    $('#message').text('')
    $('#message').hide()
  }, 4000)
}

const createGameSuccess = responseData => {
  // console.log(responseData.game.id)
  // const gameId = responseData.game.id
  // console.log('gameId is ' + gameId)
  store.game = responseData.game
  // console.log('store.newGame is ' + store.game)
  $('#message').text('New Game!')
  $('#message').css('color', 'green')
  $('#message').show()
  hideMessaging()
}

// const createGameSuccess = function (gameData) {
//   $('.board').empty()
//   currentPlayer = 1
//   $('#currentPlayer').text(`Player ${currentPlayer}'s Turn`)
//   game = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//   console.log(game)
//   win = 'n'
//   $('#message').text('New Game!')
//   $('#message').css('color', 'green')
//   $('#message').show()
//   hideMessaging()
//   $('form').trigger('reset')
// }
// NOT COMPLETE**************

const createGameFailure = function (data) {
  $('#message').text('New game failed.')
  $('#message').css('color', 'red')
  $('#message').show()
  hideMessaging()
}

// Check for winner
// const winner = function () {
//   if (
//     (game[0] === game[1] && game[1] === game[2] && game[0] > 0) ||
//     (game[0] === game[4] && game[4] === game[8] && game[0] > 0) ||
//     (game[0] === game[3] && game[3] === game[6] && game[0] > 0) ||
//     (game[1] === game[4] && game[4] === game[7] && game[1] > 0) ||
//     (game[2] === game[4] && game[4] === game[6] && game[2] > 0) ||
//     (game[2] === game[5] && game[5] === game[8] && game[2] > 0) ||
//     (game[3] === game[4] && game[4] === game[5] && game[3] > 0) ||
//     (game[6] === game[7] && game[7] === game[8] && game[6] > 0)
//   ) {
//     win = 'y'
//     console.log(`Player ${currentPlayer} wins!!`)
//     $('#currentPlayer').text(`Player ${currentPlayer} wins!!`)
//     // $('.board').off('click')
//     // Add modal, maybe toggle (hide/show)
//   }
// }

const updateGameSuccess = responseData => {
  $('#message').text('Nicely played!')
  $('#message').css('color', 'green')
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
  updateGameSuccess
}
