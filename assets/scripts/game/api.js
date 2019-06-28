const config = require('./../config')
const store = require('../store')

const createGame = (gameData) => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: '',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (updateObject, gameID) {
  // make UPDATE request to /books
  return $.ajax({
    url: config.apiUrl + `games/` + gameID,
    method: 'PATCH',
    data: updateObject, // can just do data, not data: data, because input param has the same name
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
