'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayStyleWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayStyleColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('🚫 No Number!!');
  } else if (guess === secretNumber) {
    displayMessage('🥳🥳 Correct Answer!!');
    displayNumber(secretNumber);
    displayStyleColor('#60b347');
    displayStyleWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!!' : '📉 Too Low!!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the Game!!');
      displayStyleColor('#ef233c');
      displayStyleWidth('30rem');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  displayScore(score);
  displayStyleColor('#222');
  displayStyleWidth('15rem');
  document.querySelector('.guess').value = '';
  displayNumber('?');
});
