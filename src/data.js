const posters = ['accused', 'blackmail', 'blue-blazes', 'fuga-da-new-york', 'moonrise', 'three-friends'];
const card = {
  poster: `/images/posters/`,
  title: new Set([
      `Поворот не туда`,
      `Назад в будущее`,
      `Дракула`,
      `Из неоткуда`,
      `Наказание`,
      `Еда для животных`,
      `Весело и познавательно`,
      `Битва за моё сердце`,
      `Останься навсегда`,
      `История любви`,
    ]),
  // rating: ``,
  year: new Set([
      `2018`,
      `2017`,
      `2016`,
      `2015`,
      `2014`,
      `2013`,
      `2012`,
    ]),
  duration: ``,
  genre: new Set([
      `Комедия`,
      `Драмма`,
      `История`,
      `Научный`,
      `Семейный`,
      `Боевик`,
    ]),
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras aliquet varius magna, non porta ligula feugiat eget.`
};




const createCard = (data, qty) => {
  const cardsAll = [];
  for (let i = 0; i < qty; i++) {
    let obj = {
      poster: data.poster + `${posters[Math.floor(Math.random() * posters.length)]}.jpg`,
      title: [...data.title][Math.floor(Math.random() * 5)],
      rating: `${Math.floor(Math.random()*9)}.${Math.floor(Math.random()*9)}`,
      year: [...data.year][Math.floor(Math.random() * 5)],
      duration: `${Math.floor(Math.random() * 3)}h ${Math.floor(Math.random() * 60)}m`,
      genre: [...data.genre][Math.floor(Math.random() * [...data.genre].length)],
      description: data.description
    }
    cardsAll.push(obj)
  }
  return cardsAll
}



const cardsArray = createCard(card, 7);




export {card, cardsArray};

