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

module.exports = {
  onGetGame,
};
