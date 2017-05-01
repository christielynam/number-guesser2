var playerInput = document.querySelector('.player-input');

function zeroState() {
  generateRandomNumber();
  playerInput.value = '';


}

function generateRandomNumber(min, max) {
  var min = 1;
  var max = 100;
  Math.floor(Math.random() * (max - min)) + min;
}
