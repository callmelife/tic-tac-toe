'use strict';

const app = require('../app.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
};

const changePasswordSuccess = () => {
  console.log("Password Successfully Changed.");
};

const success = (data) => {
  console.log(data);
};

const fail = (error) => {
  console.error(error);
};

// const getGameSuccess = (data) => {
//  // console.log(data.length);
//  app.games = data.games;
//  let length = app.games.length;
//  $(".displayStats").text(length);
//  // console.log(data);
// };

//CODE FOR AJAX



module.exports = {
  fail,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  // onGetGameByIdSuccess,
  // getGameSuccess,

};
