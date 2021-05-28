const btn = document.querySelector('.btn');
const modalBox = document.querySelector('.modal');
const closeIcon = document.querySelector('.modal i');

btn.addEventListener('click', () => {
  modalBox.classList.add('d-block');
});

closeIcon.addEventListener('click', () => {
  modalBox.classList.remove('d-block');
});
