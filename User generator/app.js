const userName = document.querySelector('.container h1');
const userPicture = document.querySelector('.container img');
const figcaption = document.querySelector('.container figcaption');
const userMail = document.querySelector('.container p');
const userLocation = document.querySelector('.container p:nth-of-type(2)');
const generateBtn = document.querySelector('.container button');

function APICall() {
  const url = `https://randomuser.me/api/`;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert('Something unexpected happened. Please try again.');
      }
    })
    .then((data) => {
      userName.textContent = `${data.results[0].name.first} ${data.results[0].name.last}`;
      userPicture.src = data.results[0].picture.large;
      userPicture.alt = `${data.results[0].name.first} ${data.results[0].name.last} picture`;
      figcaption.textContent = `Picture of ${data.results[0].name.first} ${data.results[0].name.last}`;
      userMail.textContent = data.results[0].email.replace('example', 'gmail');
      userLocation.textContent = `${data.results[0].location.postcode} ${data.results[0].location.city}, ${data.results[0].location.country}`;
      if (data.results[0].gender === 'female') {
        userPicture.style.border = '2px solid pink';
        generateBtn.style.border = '2px solid pink';
      } else {
        userPicture.style.border = '2px solid lightblue';
        generateBtn.style.border = '2px solid lightblue';
      }
    });
}

APICall();

generateBtn.addEventListener('click', APICall);
