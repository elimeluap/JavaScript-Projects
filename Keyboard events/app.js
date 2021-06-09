const text = document.querySelector('.text');
const container = document.querySelector('.container');
const keyValue = document.querySelector('.key-value');
const keyCodeValue = document.querySelector('.keycode-value');
const locationValue = document.querySelector('.location-value');
const whichValue = document.querySelector('.which-value');

window.addEventListener('keydown', function (e) {
  text.style.display = 'none';
  container.style.display = 'block';
  keyValue.textContent = e.key;
  keyCodeValue.textContent = e.keyCode;
  locationValue.textContent = e.location;
  whichValue.textContent = e.which;
});
