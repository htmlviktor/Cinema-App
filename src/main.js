import makeFilter from '../src/make-filter.js'
import makeCard from '../src/make-card.js'

const random = (min = 1, max = 20) => Math.round(Math.random() * (max - min) + min);

const renderTasks = (dist) => {
  const tasks = new Array(random(1, 8))
    .fill()
    .map(makeCard);
  dist.insertAdjacentHTML(`beforeend`, tasks.join(``));
};




const filters = document.querySelector('.main-navigation');
filters.insertAdjacentHTML('afterbegin', makeFilter('Favorites', random(), ));
filters.insertAdjacentHTML('afterbegin', makeFilter('History', random(), ));
filters.insertAdjacentHTML('afterbegin', makeFilter('Watchlist', random(), ));
filters.insertAdjacentHTML('afterbegin', makeFilter('All movies', random(), false));

const boardFilms = document.querySelector('.films-list .films-list__container');

for (let i = 0; i < 7; i++) {
  boardFilms.insertAdjacentHTML('beforeend', makeCard());
}

const boardFilmsExtra = document.querySelectorAll('.films-list--extra .films-list__container');
boardFilmsExtra.forEach( (element, index) => {
  console.log(element)
  for (var i = 0; i < 2; i++) {
      element.insertAdjacentHTML('beforeend', makeCard());
     }

});

filters.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('main-navigation__item'))  {
    boardFilms.innerHTML = '';
    renderTasks(boardFilms)
  }
});


