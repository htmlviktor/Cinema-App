import { Component } from "../src/component";
class Card extends Component {
  constructor(data) {
    super();
    this._poster = data.poster;
    this._title = data.title;
    this._year = data.year;
    this._rating = data.rating;
    this._duration = data.duration;
    this._genre = data.genre;
    this._description = data.description;

    this._comments = data.comments;
    this._onPopupButtonClick = this._onPopupButtonClick.bind(this);
  }

  _onPopupButtonClick() {
    typeof this._onAction === 'function' && this._onAction();
  }

  get template() {
    return `<article class="film-card">
          <h3 class="film-card__title">${this._title}</h3>
          <p class="film-card__rating">${this._rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${this._year}</span>
            <span class="film-card__duration">${this._duration}</span>
            <span class="film-card__genre">${this._genre}</span>
          </p>
          <img src="${this._poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${this._description}</p>
          <button class="film-card__comments">${this._comments.length} comments</button>

          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
        </article>`
  }

   bind() {
    this._element.querySelector('.film-card__comments')
        .addEventListener('click', this._onPopupButtonClick);
  }
  


}

export {Card}

