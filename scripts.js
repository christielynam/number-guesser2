var minRange = document.getElementById('minimum');

var maxRange = document.getElementById('maximum');

var playerInput = document.getElementById('player-input');

var guessButton = document.getElementById('guess-btn');

var clearButton = document.getElementById('clear-btn');

var lastGuess = document.querySelector('.last-guess');

var currentGuess = document.querySelector('.current-guess');

var response = document.querySelector('.response');

var guessAgain = document.querySelector('.guess-again');

var resetButton = document.getElementById('reset-btn');

var randomNum;

window.addEventListener('load', function() {
  zeroState();
  enableRange();
  disableButtons();
})

playerInput.addEventListener('input', function() {
  disableButtons();
})

guessButton.addEventListener('click', function() {
  var min = parseInt(minRange.value);
  var max = parseInt(maxRange.value);
  var guess = parseInt(playerInput.value);
  generateRandomNumber(min, max);
  evaluateInput(guess, min, max);
  disableButtons();
  resetPlayerInput();
})

window.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    var min = parseInt(minRange.value);
    var max = parseInt(maxRange.value);
    var guess = parseInt(playerInput.value);
    generateRandomNumber(min, max);
    evaluateInput(guess, min, max);
    disableButtons();
    resetPlayerInput();
  }
})

clearButton.addEventListener('click', function() {
  resetPlayerInput();
  disableButtons();
})

resetButton.addEventListener('click', function() {
  zeroState();
  disableButtons();
})

function zeroState() {
  randomNum = null;
  enableRange();
  resetPlayerInput();
  lastGuess.textContent = 'Your last guess was';
  currentGuess.textContent = '?';
  response.textContent = 'Too High/Too Low';
  guessAgain.textContent = '';
}

function resetPlayerInput() {
  playerInput.value = '';
  playerInput.focus();
}

function generateRandomNumber(min, max) {
  if (!randomNum) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    disableRange();
  }
}

function adjustRange(min, max) {
  var min = parseInt(minRange.value);
  var max = parseInt(maxRange.value);
  minRange.value = min - 10;
  maxRange.value = max + 10;
}

function enableRange() {
  minRange.value = '1';
  maxRange.value = '100';
  minRange.disabled = false;
  maxRange.disabled = false;
  resetButton.disabled = true;
}

function disableRange() {
  minRange.disabled = true;
  maxRange.disabled = true;
  resetButton.disabled = false;
}

function evaluateInput(guess, min, max) {
  if (min > max) {
    invalidRange();
  } else if (guess < min || guess > max || isNaN(guess) || isNaN(min) || isNaN(max)) {
    invalidEntry();
  } else {
    currentGuess.textContent = guess;
    evaluateGuess(guess);
  }
}

function invalidRange() {
  currentGuess.textContent = 'Invalid Range';
  minRange.disabled = false;
  maxRange.disabled = false;
  randomNum = null;
}

function invalidEntry() {
  currentGuess.textContent = 'Invalid Entry';
  resetPlayerInput();
}

function evaluateGuess(guess) {
  if (guess < randomNum) {
    tooLow();
  } else if (guess > randomNum) {
    tooHigh();
  } else if (guess === randomNum){
    boom();
    adjustRange();
    randomNum = null;
  }
}

function tooLow() {
  lastGuess.textContent = 'Your last guess was'
  response.textContent = 'That is too low';
  guessAgain.textContent = '';
}

function tooHigh() {
  lastGuess.textContent = 'Your last guess was'
  response.textContent = 'That is too high';
  guessAgain.textContent = '';
}

function boom() {
  currentGuess.textContent = 'BOOM!';
  lastGuess.textContent = 'You\'re good... Lets make this a little harder!';
  response.textContent = 'Decreasing the min by 10, increasing the max by 10...';
  guessAgain.textContent = 'Now Guess Again!';
}

function disableButtons() {
  if (playerInput.value === '') {
    guessButton.disabled = true;
    clearButton.disabled = true;
  } else {
    guessButton.disabled = false;
    clearButton.disabled = false;
  }
}
