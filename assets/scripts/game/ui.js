'use strict';

const app = require('../app.js');

const newGameSuccess = (data) => {
  app.game = data.game;

};

const getGameSuccess = function(data){
  console.log(data);
  $('.game-data').text('You have played ' + data.games.length + ' games!');
};

module.exports = {
  newGameSuccess,
  getGameSuccess,
};
