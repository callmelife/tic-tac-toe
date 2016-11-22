'use strict';

const app = require('../app.js');

const newGameSuccess = (data) => {
  app.game = data.game;

};

const getGameSuccess = function(data){
  $('.game-data').text('You have played ' + data.games.length + ' game(s)!');
};

module.exports = {
  newGameSuccess,
  getGameSuccess,
};
