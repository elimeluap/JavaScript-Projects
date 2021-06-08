const artistInput = document.querySelector('.artist');
const songInput = document.querySelector('.song');
const searchBtn = document.querySelector('.search-btn');
const songTitle = document.querySelector('.song-title');
const songLyrics = document.querySelector('.song-lyrics');

function APICall() {
  let url = `https://api.lyrics.ovh/v1/${artistInput.value}/${songInput.value}`;

  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert('Something went wrong. Please try again...');
      }
    })
    .then((data) => {
      if (artistInput.value.length && songInput.value.length) {
        songTitle.textContent = `${artistInput.value} - ${songInput.value}`;
        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
        songLyrics.innerHTML = lyrics;
      }
      artistInput.value = '';
      songInput.value = '';
    });
}

searchBtn.addEventListener('click', function () {
  APICall();
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    APICall();
  }
});
