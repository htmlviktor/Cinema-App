export default (name, count, show = true) => `<a href="#${name.toLowerCase()}" class="main-navigation__item">
${name}
${show ? `<span class="main-navigation__item-count">${count}</span></a>` : ''}`;


