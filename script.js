'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `Correct Number!`;

// to select input .value
document.querySelector('.guess').value = 30;
console.log(document.querySelector('.guess').Value);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    displayMessage('🚨 !لا يوجد رقم');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🤩 correct Number';
    displayMessage('🤩 الرقم الصحيح');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //wrong guess
  } else if (score !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? '👠 !رقمك مرتفع' : '🙁!رقمك منخفض');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '👾 You lost the game!';
      displayMessage('👾 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  /* // when guess too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '👠Too high!' : '🙁Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👾 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  /*else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '👠Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👾 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🙁Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👾 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
});
