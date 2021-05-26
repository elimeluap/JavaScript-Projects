const textContainer = document.querySelector('.text-container');

const text = `Hi, my name is Paul and I'm a Web Developer`;
const letters = text.split('');
let counter = 0;
let progress = '';
let speed = 300;

setInterval(() => {
  let letter = letters[counter];
  counter++;
  progress += letter;
  if (counter === letters.length + 1) {
    counter = 0;
    progress = ``;
  }
  textContainer.textContent = progress;
}, speed);
