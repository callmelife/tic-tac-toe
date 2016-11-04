'use strict';

const app = require('../app.js');

const newGameSuccess = (data) => {
  // console.log('data is', data);
  app.game = data.game;

};

const getGameSuccess = function(data){
  $('.game-data').text('You have played ' + data.game.length + ' games!');
};
module.exports = {
  newGameSuccess,
  getGameSuccess,
};
