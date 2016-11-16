'use strict';

const app = require('../app.js');
// const gameInfo = require('../index.js');

const createGame = function(){
  return $.ajax({
    url: app.host + '/games',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).then(data=>app.game = data.game);
  };

const getGame = () => {
  return $.ajax({
  url: app.host + '/games/' + '?over=true',
  method: "GET",
  headers: {
    Authorization: 'Token token=' + app.user.token,
  }
});
};

const updateGame = (index,value,trueOrFalse) => {
    return $.ajax({
      url: app.host + '/games/'+ app.game.id,
      method: "PATCH",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: {
        "game": {
          "cell": {
            "index": index,
            "value": value
          },
          "over": trueOrFalse
        }
      }
    }).then(data=>app.game = data.game);
  };

module.exports = {
  getGame,
  updateGame,
  createGame
};
