import makeFilter from '../src/make-filter.js'
import {data, cardsArray} from '../src/data.js'
import {Card} from '../src/card.js'
import {CardPopup} from '../src/card-popup.js'

const random = (min = 1, max = 20) => Math.round(Math.random() * (max - min) + min);


const cardsContainer = document.querySelector('.films-list__container');

const cardComponent = new Card(cardsArray[0]);
const cardPopup = new CardPopup(cardsArray[0]);

cardsContainer.appendChild(cardComponent.render());


cardComponent.onClick = () => {
  document.body.appendChild(cardPopup.render());
}

cardPopup.onClose = () => {
  cardPopup._element.remove();
}



const filters = document.querySelector('.main-navigation');
filters.insertAdjacentHTML('afterbegin', makeFilter('Favorites', random(), ));
filters.insertAdjacentHTML('afterbegin', makeFilter('History', random(), ));
filters.insertAdjacentHTML('afterbegin', makeFilter('Watchlist', random(), ));
filters.insertAdjacentHTML('afterbegin', makeFilter('All movies', random(), false));

const boardFilms = document.querySelector('.films-list .films-list__container');








