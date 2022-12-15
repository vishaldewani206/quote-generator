const quoteContainer = document.querySelector('.quote');
const nextBtn = document.querySelector('#next');
const author = document.querySelector('#author');
const copyBtn = document.querySelector('#copy');
const option = {
  method: 'GET',
  url: 'https://quotes15.p.rapidapi.com/quotes/random/',

  headers: {
    'X-RapidAPI-Key': '9c4a1b5925msh60c6ca2f3544de0p168996jsna36335fc2403',
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
  },
};
fetch('https://quotes15.p.rapidapi.com/quotes/random/', option)
  .then((response) => response.json())
  .then((data) => {
    quoteContainer.innerHTML = data.content;
    author.innerHTML = data.originator.name;
  });
nextBtn.addEventListener('click', () => {
  fetch('https://quotes15.p.rapidapi.com/quotes/random/', option)
    .then((response) => response.json())
    .then((data) => {
      quoteContainer.innerHTML = data.content;
      author.innerHTML = data.originator.name;
    });
});
copyBtn.addEventListener('click', () => {
  let copy = quoteContainer.textContent;
  navigator.clipboard.writeText(copy);
});
