const counter = document.querySelector('.counter');
const decreaseBtn = document.querySelector('.decrease-btn');
const resetBtn = document.querySelector('.reset-btn');
const increaseBtn = document.querySelector('.increase-btn');

let count = 0;

function colorizeCounter(n) {
  if (n > 0) {
    counter.style.color = 'green';
  } else if (n < 0) {
    counter.style.color = 'red';
  } else {
    counter.style.color = '#000';
  }
}

decreaseBtn.addEventListener('click', function () {
  count--;
  colorizeCounter(count);
  counter.textContent = count;
});

resetBtn.addEventListener('click', function () {
  count = 0;
  colorizeCounter(count);
  counter.textContent = count;
});

increaseBtn.addEventListener('click', function () {
  count++;
  colorizeCounter(count);
  counter.textContent = count;
});
