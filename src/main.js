import makeFilter from '../src/make-filter.js'
import makeCard from '../src/make-card.js'
import {cardsArray} from '../src/data.js'

const random = (min = 1, max = 20) => Math.round(Math.random() * (max - min) + min);

const renderTasks = (dist, max) => {
 const cards = cardsArray.map(function(index, elem) {
    return makeCard(index)
}).slice(0, max).join(``);

 dist.insertAdjacentHTML('beforeend', cards)
};









const filters = document.querySelector('.main-navigation');
filters.insertAdjacentHTML('afterbegin', makeFilter('Favorites', random(), ));
filters.insertAdjacentHTML('afterbegin', makeFilter('History', random(), ));
filters.insertAdjacentHTML('afterbegin', makeFilter('Watchlist', random(), ));
filters.insertAdjacentHTML('afterbegin', makeFilter('All movies', random(), false));

const boardFilms = document.querySelector('.films-list .films-list__container');
renderTasks(boardFilms, 7);


const boardFilmsExtra = document.querySelectorAll('.films-list--extra .films-list__container');
boardFilmsExtra.forEach( (element, index) => {
  renderTasks(element, 2)
});



filters.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('main-navigation__item'))  {
    boardFilms.innerHTML = '';
    renderTasks(boardFilms)
  }
});





