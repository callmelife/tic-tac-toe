'use strict';

// const translateBoardToGameState = function(){
//   return Array.from($('.box').map((index, value) => {
//     if($(value).hasClass('X')){
//       return "X";
//     }
//     if($(value).hasClass('0')){
//       return "0";
//     }
//     else {
//       return "";
//     }
//   }));
// };

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/events.js')
const gameApi = require('./game/api.js');

// const getStats = require('./game/events.js');
// const getGameSuccess = require('./game/ui.js');
  $('#sign-in').hide();
  $('.game-board').hide();
  $('#sign-out').hide();
  $('#change-password').hide();
window.app = require('./app');



$(() => {
  gameEvents.addHandlers();
  authEvents.addHandlers();
});

// Patrick's instructions:
// Get all game and API calls
// Return array of games
// write a function (did the user email b present on the game and get the lenght of that gameOn once tofilter through) check the win state
//







// $('.getStats').click(function(){
// $('.game-data').text('You have played this many games:  ');
// //  let length = app.games.length;
//
// });



//
//
// return $.ajax({
//   url: app.host + '/games/'+ app.game.id,
//   method: "PATCH",
//   headers: {
//     Authorization: 'Token token=' + app.user.token,
//   },
//   data: {
//     "game": {
//       "cell": {
//         "index": index,
//         "value": value
//       },
//       "over": trueOrFalse
//     }
