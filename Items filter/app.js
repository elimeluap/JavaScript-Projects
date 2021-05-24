let guitars = [
  {
    brand: 'Gibson',
    model: 'Les Paul Modern Graphite Top',
    image: './images/guitar1.jpeg',
    category: 'gibson',
  },
  {
    brand: 'Gibson',
    model: "Les Paul Standard '50s P90 Gold Top",
    image: './images/guitar2.jpeg',
    category: 'gibson',
  },
  {
    brand: 'Fender',
    model: 'Player Telecaster MN Butterscotch Blonde',
    image: './images/guitar3.jpeg',
    category: 'fender',
  },
  {
    brand: 'PRS',
    model: 'PRS SE Custom 24-08 Eriza Verde',
    image: './images/guitar4.jpeg',
    category: 'prs',
  },
  {
    brand: 'Gibson',
    model: 'Flying V 2017 T Ebony',
    image: './images/guitar5.jpeg',
    category: 'gibson',
  },
  {
    brand: 'Fender',
    model: 'Player Series Stratocaster MN 3TS',
    image: './images/guitar6.jpeg',
    category: 'fender',
  },
  {
    brand: 'PRS',
    model: 'Private Stock #9085 Santana Retro 1980 Santana Yellow',
    image: './images/guitar7.jpeg',
    category: 'prs',
  },
  {
    brand: 'PRS',
    model: 'LTD SE Angelus AE50E Charcoal Burst',
    image: './images/guitar8.jpeg',
    category: 'prs',
  },
];

const allBtn = document.querySelector('.all-btn');
const fenderBtn = document.querySelector('.fender-btn');
const gibsonBtn = document.querySelector('.gibson-btn');
const prsBtn = document.querySelector('.prs-btn');
const cardsContainer = document.querySelector('.cards-container');

function dynamicCards(obj) {
  obj.forEach((obj) => {
    let fullName = `${obj.brand} ${obj.model}`;
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    const cardTitle = document.createElement('h2');
    newCard.appendChild(cardTitle);
    cardTitle.textContent = fullName;
    const cardImage = document.createElement('img');
    newCard.appendChild(cardImage);
    cardImage.setAttribute('src', obj.image);
    cardImage.setAttribute('alt', fullName);
    cardImage.alt = fullName;
    const cardButton = document.createElement('button');
    cardButton.textContent = 'More infos';
    newCard.appendChild(cardButton);
    cardsContainer.appendChild(newCard);
    newCard.setAttribute('data-category', obj.category);
  });
}

function filterByCategory(category) {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    if (card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

dynamicCards(guitars);

allBtn.addEventListener('click', function () {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.style.display = 'block';
  });
});

fenderBtn.addEventListener('click', function () {
  filterByCategory('fender');
});

gibsonBtn.addEventListener('click', function () {
  filterByCategory('gibson');
});

prsBtn.addEventListener('click', function () {
  filterByCategory('prs');
});
