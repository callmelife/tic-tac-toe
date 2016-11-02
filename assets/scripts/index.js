'use strict';

const authEvents = require('./auth/events.js');

$(() => {
  authEvents.addHandlers();
});

let ticTacArray = [["box","box","box"],["box","box","box"],["box","box","box"]];
let turnCounter = 1;
let currentPlayer;

let lockBoard = function(){
  $('.top-left').css("pointer-events", "none");
  $('.top-center').css("pointer-events", "none");
  $('.top-right').css("pointer-events", "none");
  $('.middle-left').css("pointer-events", "none");
  $('.middle-center').css("pointer-events", "none");
  $('.middle-right').css("pointer-events", "none");
  $('.bottom-left').css("pointer-events", "none");
  $('.bottom-center').css("pointer-events", "none");
  $('.bottom-right').css("pointer-events", "none");
};

let turnOnClicks = function(){
  $('.top-left').css("pointer-events", "auto");
  $('.top-center').css("pointer-events", "auto");
  $('.top-right').css("pointer-events", "auto");
  $('.middle-left').css("pointer-events", "auto");
  $('.middle-center').css("pointer-events", "auto");
  $('.middle-right').css("pointer-events", "auto");
  $('.bottom-left').css("pointer-events", "auto");
  $('.bottom-center').css("pointer-events", "auto");
  $('.bottom-right').css("pointer-events", "auto");
};

let checkForWinner = function(){
// Win Method #1: horizontal top row
    if (ticTacArray[0][0] !== "box" && (ticTacArray[0][0] === ticTacArray[0][1] && ticTacArray[0][0] === ticTacArray[0][2])) {
      $(".displayWinner").text("The winner of this round is: " + currentPlayer);
      lockBoard();
    }
// Win Method #2: horizontal middle row
    else if (ticTacArray[1][0] !== "box" && (ticTacArray[1][0] === ticTacArray[1][1] && ticTacArray[1][0] === ticTacArray[1][2])) {
      $(".displayWinner").text("The winner of this round is: " + currentPlayer);
      lockBoard();
    }
// Win Method #3: horizontal bottom row
    else if (ticTacArray[2][0] !== "box" && (ticTacArray[2][0] === ticTacArray[2][1] && ticTacArray[2][0] === ticTacArray[2][2])) {
      $(".displayWinner").text("The winner of this round is: " + currentPlayer);
      lockBoard();
    }
// Win Method #4: vertical left row
    else if (ticTacArray[0][0] !== "box" && (ticTacArray[0][0] === ticTacArray[1][0] && ticTacArray[0][0] === ticTacArray[2][0])) {
      $(".displayWinner").text("The winner of this round is: " + currentPlayer);
      lockBoard();
    }
// Win Method #5: vertical middle row
    else if (ticTacArray[0][1] !== "box" && (ticTacArray[0][1] === ticTacArray[1][1] && ticTacArray[0][1] === ticTacArray[2][1])) {
      $(".displayWinner").text("The winner of this round is: " + currentPlayer);
      lockBoard();
    }
// Win Method #6: vertical right row
    else if (ticTacArray[0][2] !== "box" && (ticTacArray[0][2] === ticTacArray[1][2] && ticTacArray[0][2] === ticTacArray[2][2])) {
      $(".displayWinner").text("The winner of this round is: " + currentPlayer);
      lockBoard();
    }
// win method 7: Top left to bottom right diagonal
    else if (ticTacArray[0][0] !== "box" && (ticTacArray[0][0] === ticTacArray[1][1] && ticTacArray[0][0] === ticTacArray[2][2])) {
      $(".displayWinner").text("The winner of this round is: " + currentPlayer);
      lockBoard();
    }
// win method 8: top right to bottom left diagonal
    else if (ticTacArray[0][2] !== "box" && (ticTacArray[0][2] === ticTacArray[1][1] && ticTacArray[0][2] === ticTacArray[2][0])) {
      $(".displayWinner").text("The winner of this round is: " + currentPlayer);
      lockBoard();
    }
// Makes sure the game ends at 9 clicks & doesnt cause a double reaction
    else if (turnCounter === 10) {
      $(".displayWinner").text("No winner! This game is a draw");
      lockBoard();
  }
};

$('.top-left').click(function(){
  if (ticTacArray[0][0] === "box") {
    if (turnCounter % 2 === 0) {
      currentPlayer = 'Player 2';
        $(this).html('0');
        ticTacArray[0][0] = "0";
    } else {
      currentPlayer = 'Player 1';
        $(this).html('X');
          ticTacArray[0][0] = "X";
    }
    turnCounter++;
    checkForWinner();
  }
});

$('.top-center').click(function(){
  if (ticTacArray[0][1] === "box") {
    if (turnCounter % 2 === 0) {
      currentPlayer = 'Player 2';
        $(this).html('0');
        ticTacArray[0][1] = "0";
    } else {
      currentPlayer = 'Player 1';
        $(this).html('X');
          ticTacArray[0][1] = "X";
    }
    turnCounter++;
    checkForWinner();
  }
});

$('.top-right').click(function(){
  if (ticTacArray[0][2] === "box") {
    if (turnCounter % 2 === 0) {
      currentPlayer = 'Player 2';
        $(this).html('0');
        ticTacArray[0][2] = "0";
    } else {
      currentPlayer = 'Player 1';
        $(this).html('X');
          ticTacArray[0][2] = "X";
    }
    turnCounter++;
    checkForWinner();
  }
});

$('.middle-left').click(function(){
  if (ticTacArray[1][0] === "box") {
    if (turnCounter % 2 === 0) {
      currentPlayer = 'Player 2';
        $(this).html('0');
        ticTacArray[1][0] = "0";
    } else {
      currentPlayer = 'Player 1';
        $(this).html('X');
          ticTacArray[1][0] = "X";
    }
    turnCounter++;
    checkForWinner();
  }
});

$('.middle-center').click(function(){
  if (ticTacArray[1][1] === "box") {
    if (turnCounter % 2 === 0) {
      currentPlayer = 'Player 2';
        $(this).html('0');
        ticTacArray[1][1] = "0";
    } else {
      currentPlayer = 'Player 1';
        $(this).html('X');
          ticTacArray[1][1] = "X";
    }
    turnCounter++;
    checkForWinner();
  }
});

$('.middle-right').click(function(){
  if (ticTacArray[1][2] === "box") {
    if (turnCounter % 2 === 0) {
      currentPlayer = 'Player 2';
        $(this).html('0');
        ticTacArray[1][2] = "0";
    } else {
      currentPlayer = 'Player 1';
        $(this).html('X');
          ticTacArray[1][2] = "X";
    }
    turnCounter++;
    checkForWinner();
  }
});

$('.bottom-left').click(function(){
  if (ticTacArray[2][0] === "box") {
    if (turnCounter % 2 === 0) {
      currentPlayer = 'Player 2';
        $(this).html('0');
        ticTacArray[2][0] = "0";
    } else {
      currentPlayer = 'Player 1';
        $(this).html('X');
          ticTacArray[2][0] = "X";
    }
    turnCounter++;
    checkForWinner();
  }
});

$('.bottom-center').click(function(){
  if (ticTacArray[2][1] === "box") {
    if (turnCounter % 2 === 0) {
      currentPlayer = 'Player 2';
        $(this).html('0');
        ticTacArray[2][1] = "0";
    } else {
      currentPlayer = 'Player 1';
        $(this).html('X');
          ticTacArray[2][1] = "X";
    }
    turnCounter++;
    checkForWinner();
  }
});

$('.bottom-right').click(function(){
  if (ticTacArray[2][2] === "box") {
    if (turnCounter % 2 === 0) {
      currentPlayer = 'Player 2';
        $(this).html('0');
        ticTacArray[2][2] = "0";
    } else {
      currentPlayer = 'Player 1';
        $(this).html('X');
          ticTacArray[2][2] = "X";
    }
    turnCounter++;
    checkForWinner();
  }
});

$('.resetButton').on('click', function(){
    $('.displayWinner').text("");
    $('.top-left').text('');
      // ticTacArray[0][0] = "box";
    $('.top-center').text('');
      // ticTacArray[0][1] = "box";
    $('.top-right').text('');
      // ticTacArray[0][2] = "box";
    $('.middle-left').text('');
      // ticTacArray[1][0] = "box";
    $('.middle-center').text('');
      // ticTacArray[1][1] = "box";
    $('.middle-right').text('');
      // ticTacArray[1][2] = "box";
    $('.bottom-left').text('');
      // ticTacArray[2][0] = "box";
    $('.bottom-center').text('');
      // ticTacArray[2][1] = "box";
    $('.bottom-right').text('');
      // ticTacArray[2][2] = "box";
      turnCounter = 1;
      ticTacArray = [["box","box","box"],["box","box","box"],["box","box","box"]];
      turnOnClicks();
  });
