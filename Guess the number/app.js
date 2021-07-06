// DOM elements
const tries = document.querySelector('.tries');
const userInput = document.querySelector('.user-input');
const submitBtn = document.getElementById('submitBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const infos = document.querySelector('.infos');
const success = new Audio('win.mp3');
const failure = new Audio('lose.mp3');

// Variables
let randomNbr;
let triesNbr = 8;
let counter = 0;
let playable = true;

// Generates a random number between two values
function getRandomNbr(min, max) {
  randomNbr = Math.floor(Math.random() * (max - min) + min);
  return randomNbr;
}

// Compares the user input with the random number
function checkNumber(userNbr, randomNbr) {
  if (userNbr < randomNbr) {
    const newLi = document.createElement('li');
    newLi.textContent = `🚫 ${userNbr}, too low...`;
    infos.appendChild(newLi);
  } else if (userNbr > randomNbr) {
    const newLi = document.createElement('li');
    newLi.textContent = `🚫 ${userNbr}, too high...`;
    infos.appendChild(newLi);
  } else if (userNbr == randomNbr) {
    const newLi = document.createElement('li');
    newLi.textContent = `✅ ${userNbr} is correct! You won!`;
    infos.appendChild(newLi);
    playable = false;
    submitBtn.style.display = 'none';
    playAgainBtn.style.display = 'block';
    success.play();
  }
}

// Re-initialize the variables, etc...
function reset() {
  counter = 0;
  playable = true;
  playAgainBtn.style.display = 'none';
  submitBtn.style.display = 'block';
  tries.textContent = triesNbr;
  userInput.value = '';
  infos.innerHTML = '';
  getRandomNbr(0, 100);
}

// When the app is launched
getRandomNbr(0, 100);

// When the user clicks the 'Submit' button
submitBtn.addEventListener('click', function () {
  if (!isNaN(userInput.value) && !userInput.value == '' && playable === true) {
    counter++;
    if (counter <= triesNbr) {
      tries.textContent = triesNbr - counter;
      checkNumber(userInput.value, randomNbr);
      userInput.value = '';
    } else {
      const newLi = document.createElement('li');
      newLi.textContent = `😔 You lost...`;
      infos.appendChild(newLi);
      playable = false;
      submitBtn.style.display = 'none';
      playAgainBtn.style.display = 'block';
      failure.play();
    }
  } else {
    alert('❗️ Only numbers are allowed ❗️');
    userInput.value = '';
  }
});

// When the user clicks the 'Play again' button
playAgainBtn.addEventListener('click', function () {
  reset();
});
