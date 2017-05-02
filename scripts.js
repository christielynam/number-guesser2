var playerInput = document.querySelector('.player-input');

var guess = parseInt(playerInput.value);

var guessButton = document.getElementById('guess-btn');

var clearButton = document.getElementById('clear-btn');

var resetButton = document.getElementById('reset-btn');

var min;

var max;

var randomNum;


window.addEventListener('load', function() {
    zeroState();
    generateRandomNumber();
    playerInput.focus();
});


function generateRandomNumber(min, max) {
  var min = 1;
  var max = 100;
  randomNum = Math.floor(Math.random() * (max - min)) + min;
  console.log(randomNum);
}

guessButton.addEventListener('click', function() {
  evaluateGuess();

})

function evaluateGuess() {
  console.log(`guess = ${guess}`);
  console.log(randomNum);
  console.log(typeof playerInput.value);
  debugger;
  var lastGuess = document.querySelector('.last-guess');
  var response = document.querySelector('.response');
  lastGuess.innerText = playerInput.value;
  if (guess < randomNum) {
    response.innerText = 'That is too low';
  } else if (guess > randomNum) {
    response.innerText = 'That is too high';
  } else {
    response.innerText = 'BOOM!'
  }
}

clearButton.addEventListener('click', function() {
  playerInput.value = '';
})

resetButton.addEventListener('click', function() {
  zeroState();
  generateRandomNumber();
})

function zeroState() {
  // playerInput.value = '';
  // guessButton.disabled = true;
  // clearButton.disabled = true;

}
