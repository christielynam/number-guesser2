var minimum = document.getElementById('minimum');

var maximum = document.getElementById('maximum');

var playerInput = document.getElementById('player-input');

var guessButton = document.getElementById('guess-btn');

var clearButton = document.getElementById('clear-btn');

var prevGuess = document.querySelector('.previous-guess');

var lastGuess = document.querySelector('.last-guess');

var response = document.querySelector('.response');

var resetButton = document.getElementById('reset-btn');

var randomNum;

window.addEventListener('load', function() {
    zeroState();
    disableButtons();
})

playerInput.addEventListener('input', function() {
  disableButtons();
})

guessButton.addEventListener('click', function() {
  var min = parseInt(minimum.value);
  var max = parseInt(maximum.value);
  var guess = parseInt(playerInput.value);
  generateRandomNumber(min, max);
  evaluateInput(guess, min, max);
  disableButtons();
})

clearButton.addEventListener('click', function() {
  playerInput.value = '';
  playerInput.focus();
  disableButtons();
})

resetButton.addEventListener('click', function() {
  zeroState();
  enableRange();
  disableButtons();
  minimum.value = '1';
  maximum.value = '100';
})

function zeroState() {
  playerInput.value = '';
  playerInput.focus();
  prevGuess.textContent = 'Your last guess was';
  lastGuess.textContent = '?';
  response.textContent = 'Too High/Too Low';
  randomNum = null;
}

function generateRandomNumber(minimum, maximum) {
  if (!randomNum) {
    var min = Math.ceil(minimum);
    var max = Math.floor(maximum);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    disableRange();
    console.log( "randomNumber" + randomNum);
  }
}

function disableRange() {
  minimum.disabled = true;
  maximum.disabled = true;
}

function enableRange() {
  minimum.value = '';
  maximum.value = '';
  minimum.disabled = false;
  maximum.disabled = false;
}

function evaluateInput(guess, minimum, maximum) {
  if (guess < minimum || guess > maximum || isNaN(guess) || isNaN(minimum) || isNaN(maximum)) {
    lastGuess.textContent = 'Invalid Entry';
    playerInput.value = '';
    playerInput.focus();
  } else {
    lastGuess.textContent = guess;
    evaluateGuess(guess);
  }
}

function evaluateGuess(guess) {
  if (guess < randomNum) {
    response.textContent = 'That is too low';
  } else if (guess > randomNum) {
    response.textContent = 'That is too high';
  } else {
    lastGuess.textContent = 'BOOM!';
    prevGuess.textContent = '';
    response.textContent = '';
    randomNum = null;
    //TODO call a fx that adjusts the min and max range
  }
}

function disableButtons() {
  if (playerInput.value === '') {
    guessButton.disabled = true;
    clearButton.disabled = true;
    resetButton.disabled = true;
  } else {
    guessButton.disabled = false;
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
}
