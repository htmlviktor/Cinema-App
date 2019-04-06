class Card {
  constructor(data) {
    this._poster = data.poster;
    this._title = data.title;
    this._year = data.year;
    this._rating = data.rating;
    this._duration = data.duration;
    this._genre = data.genre;
    this._description = data.description;

    this._element = null;
    this._onClick = null;
  }

  _onPopupButtonClick() {
    typeof this._onClick === 'function' && this._onClick();
  }

  set onClick(fn) {
    this._onClick = fn;
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
          <button class="film-card__comments">13 comments</button>

          <form class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
          </form>
        </article>`
  }

   bind() {
    this._element.querySelector('.film-card__comments')
        .addEventListener('click', this._onPopupButtonClick.bind(this));
  }

  createNode(template) {
    const element = document.createElement('div');
    element.innerHTML = template;
    return element.firstChild
  }
  render(container) {
    this._element = this.createNode(this.template);
    this.bind();
    return this._element;

  }


}

export {Card}

