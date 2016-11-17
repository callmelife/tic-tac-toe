'use strict';

const app = require('../app.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  $('#sign-out').show();
  $('#change-password').show();
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#statsButton').show();
  $(".resetButton").show();
  $('.game-data').show();
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#sign-up').show();
  $('#sign-in').show();
  $('.game-board').hide();
  $('#statsButton').hide();
  $(".resetButton").hide();
  $('.game-data').hide();
  $('.displayWinner').hide();
};

const changePasswordSuccess = () => {
  console.log("Password Successfully Changed.");
};

const success = (data) => {
  console.log(data);
  $('#sign-in').show();
};

const fail = (error) => {
  console.error(error);
};

module.exports = {
  fail,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};
