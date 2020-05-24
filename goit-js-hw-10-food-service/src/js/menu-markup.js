import menuCardInfo from '../menu.json';
import postMenuCard from '../templates/post-menu-card.hbs';

const refs = {
  menuCardLists: document.querySelector('.js-menu'),
};

const markup = postMenuCard(menuCardInfo);

refs.menuCardLists.insertAdjacentHTML('beforeend', markup);

// function buildMenuCard(menuCardInfo) {
//   const markup = menuCardInfo.map(card => menuCardTemplate(card)).join('');
//   refs.menuCardLists.insertAdjacentHTML('beforeend', markup);
// }

// buildMenuCard(menuCardInfo);
