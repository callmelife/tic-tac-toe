'use strict';

const app = require('../app.js');

const newGameSuccess = (data) => {
  // console.log('data is', data);
  app.game = data.game;

};

module.exports = {
  newGameSuccess,
};
