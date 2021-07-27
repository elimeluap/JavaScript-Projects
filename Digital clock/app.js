const timeBox = document.getElementById('timeBox');
const dateBox = document.getElementById('dateBox');

// Displays the day and the hour
let displayTime = () => {
  let date = new Date();
  let h = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let dayDate = date.toLocaleString('en-EN', {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: '2-digit',
  });

  // Displays the hour with 2 digits
  h = h < 10 ? '0' + h : h;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  let time = `${h} : ${min} : ${sec}`;

  timeBox.innerText = time;
  dateBox.innerText = dayDate;
};

// Displays the day and the hour as soon as the app runs
displayTime();

// Runs the displayTime function every 100ms
setInterval(displayTime, 100);
