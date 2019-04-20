import makeFilter from './make-filter'
import {cardsArray} from './data'
import {Card} from './card'
import {CardPopup} from './card-popup'

const random = (min = 1, max = 20) => Math.round(Math.random() * (max - min) + min);


const cardsContainer = document.querySelector('.films-list__container');

const cardComponent = new Card(cardsArray[0]);
const cardPopup = new CardPopup(cardsArray[0]);

cardsContainer.appendChild(cardComponent.render());


cardComponent.onAction = () => {
  document.body.appendChild(cardPopup.render());
}

cardPopup.onAction = (data, comments) => {
  cardsArray[0].comments = comments;
  cardsArray[0].watched = data.watched;
  cardsArray[0]['comment-emoji'] = data['comment-emoji'];
  cardsArray[0].score = data.score;
  
  
  cardComponent._element.remove();
  cardsContainer.appendChild(cardComponent.render())

  
  cardPopup._element.remove();
  console.log(cardPopup._element)
  cardPopup.unbind();
  console.log(cardPopup._element)
}



const filters = document.querySelector('.main-navigation');
filters.insertAdjacentHTML('afterbegin', makeFilter('Favorites', random(), ));
filters.insertAdjacentHTML('afterbegin', makeFilter('History', random(), ));
filters.insertAdjacentHTML('afterbegin', makeFilter('Watchlist', random(), ));
filters.insertAdjacentHTML('afterbegin', makeFilter('All movies', random(), false));

const boardFilms = document.querySelector('.films-list .films-list__container');








