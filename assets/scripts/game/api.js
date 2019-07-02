const config = require('./../config')
const store = require('../store')

const getRecord = () => {
  return $.ajax({
    url: config.apiUrl + '/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

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
    data: updateObject,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getRecord
}
