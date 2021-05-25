const charge = document.querySelector('.charge');

function loadingAnimation() {
  let currentWidth = 0;
  setInterval(() => {
    currentWidth += 25;
    charge.style.width = currentWidth + 'px';
    if (currentWidth === 200) {
      currentWidth = 0;
    } else if (currentWidth <= 50) {
      charge.style.background = 'red';
    } else if (currentWidth <= 100) {
      charge.style.background = 'orange';
    } else {
      charge.style.background = 'lightgreen';
    }
  }, 750);
}

function batteryLoading() {
  loadingAnimation();
}

batteryLoading();
