'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function textContentMessage(text) {
  document.querySelector('.message').textContent = text;
}

function textContentScore(text) {
  document.querySelector('.score').textContent = text;
}

function textContentNumber(text) {
  document.querySelector('.number').textContent = text;
}

function backgroundColor(text) {
  document.querySelector('body').style.backgroundColor = text;
}

function numberWidth(text) {
  document.querySelector('.number').style.width = text;
}

function exec() {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    textContentMessage('No Number!');
  } else if (guess === secretNumber) {
    textContentMessage('✅ Correct!');
    textContentNumber(secretNumber);
    backgroundColor('#60b347');
    numberWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      textContentMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      textContentScore(score);
    } else {
      textContentMessage('You Lost the Game');
      textContentScore(0);
    }
  }
}

function reset () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  textContentMessage('Start Guessing...');
  textContentScore(score);
  textContentNumber('?');
  backgroundColor('#222');
  numberWidth('15rem');
  document.querySelector('.guess').value = '';
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    exec();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    reset();
  }
})

document.querySelector('.check').addEventListener('click', function () {
  exec();
});

document.querySelector('.again').addEventListener('click', function () {
  reset();
});
