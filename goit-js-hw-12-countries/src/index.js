import countryInfoTemplate from './templates/country-info.hbs';
import coutriesListTemplate from './templates/country-list.hbs';
import countryService from './js/services/info-search';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import '@pnotify/core/dist/BrightTheme.css';
import { alert, notice, info, success, error, Stack } from '@pnotify/core';

import './styles.css';

//------------ single country info

function buildCountryInfoMarkup(posts) {
  const markup = countryInfoTemplate(posts[0]);

  refs.postSearchResult.insertAdjacentHTML('beforeend', markup);
}

//--------------------- coutries list

function buildCountriesListMarkup(posts) {
  const markup = posts.map(post => coutriesListTemplate(post)).join('');
  refs.postSearchResult.insertAdjacentHTML('beforeend', markup);
}

//-------------------------------- Debounce

refs.searchForm.addEventListener('input', debounce(handleInputSearch, 500));

function handleInputSearch(e) {
  e.preventDefault();

  clearListItems();
  const input = e.target.value;
  console.log(input);

  countryService.fetchCountry(input).then(data => {
    console.log(data);
    console.log(data.length);

    if (data.length >= 2 && data.length < 10) {
      buildCountriesListMarkup(data);
    } else if (data.length === 1) {
      buildCountryInfoMarkup(data);
    } else {
      console.log('Too many optiong to choose');
      const myStack = new Stack({
        dir1: 'up',
        // dir2: 'right',
        firstpos1: 253,
        // firstpos2: 25,
        // spacing1: 36,
        spacing2: 36,
        push: 'bottom',
        context: document.body,
      });

      alert({
        text: 'Too many matches fround. Please enter more specific query!',
        type: 'error',
        styling: 'brighttheme',
        width: '360px',
        minHeight: '30px',
        animation: 'fade',
        animateSpeed: 'slow',
        mode: 'light',
        closer: false,
        shadow: true,
        hide: true,
        icon: true,
        delay: 3000,
        sticker: false,
      });
    }
  });
}

function clearListItems() {
  refs.postSearchResult.innerHTML = '';
}
