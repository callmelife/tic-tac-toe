'use strict';

const app = require('../app.js');

const newGameSuccess = (data) => {
  // console.log('data is', data);
  app.game = data.game;

};

const getGameSuccess = function(data){
  // $('.game-data').text('Hello World');
  console.log(data);
  $('.game-data').text('You have played ' + data.games.length + ' games!');
};


// const getGameSuccess = (data) => {
//  // console.log(data.length);
//  app.games = data.games;
//  let length = app.games.length;
//  $("#get-data").text(length);
//  // console.log(data);
// };

//CODE FOR AJAX
module.exports = {
  newGameSuccess,
  getGameSuccess,
};
