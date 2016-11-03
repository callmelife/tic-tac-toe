'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

// AJAX CODE

const onGetGame = function (event) {
    event.preventDefault();
    let data = getFormFields(event.target);
    api.getGame(data)
    .done(ui.getGameSuccess)
    .fail(ui.fail);
  };

  const onGetGameByIdSuccess = (data) => {
   // console.log(data.length);
   app.games = data.games;
   let length = app.games.length;
   $("#gameOver").html(length);
   // console.log(data);
  };

module.exports = {
  onGetGame,
};
