'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

const onSignUp = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.fail);
};

const onSignIn = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.fail);
};

const onSignOut = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
  .done(ui.signOutSuccess)
  .fail(ui.fail);
};

const onChangePassword = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.fail);
};


// // CODE TO HANDLE AJAX
// const onGetGameById = function (event) {
//   event.preventDefault();
//   api.getGameById()
//     .done(ui.onGetGameByIdSuccess)
//     .fail(ui.fail);
//   // console.log(data);
// };

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  // $('#getGameById').on('click', onGetGameById);
};

module.exports = {
  addHandlers,
};
