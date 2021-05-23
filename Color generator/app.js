const body = document.querySelector('body');
const randomColor = document.querySelector('.random-color');
const generateBtn = document.querySelector('.btn');
const copyBtn = document.getElementById('copy');
const copyInput = document.querySelector('.copy-input');

const baseValues = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

let randomHexValues = [];
let finalColor;

function randomHexCode() {
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * baseValues.length);
    let singleValue = baseValues[randomNumber];
    randomHexValues.push(singleValue);
  }
  finalColor = randomHexValues.join('');
  randomHexValues = [];
  setBackgroundColors(finalColor);
  return finalColor;
}

function setBackgroundColors(el) {
  body.style.background = `#${el}`;
  randomColor.textContent = `#${el}`;
  generateBtn.style.background = `#${el}`;
  copyBtn.style.background = `#${el}`;
}

function copyToClipboard() {
  copyInput.value = randomColor.textContent.toUpperCase();
  let copyInputValue = copyInput.select();
  document.execCommand('copy', copyInputValue);
  copyBtn.textContent = 'Copied';
  setTimeout(() => {
    copyBtn.textContent = 'Copy';
  }, 500);
}

randomHexCode();

generateBtn.addEventListener('click', randomHexCode);

copyBtn.addEventListener('click', copyToClipboard);
