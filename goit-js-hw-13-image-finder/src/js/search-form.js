import refs from './refs';
import { debounce } from 'lodash';
import searchService from './services/apiService';
import spinner from './spinner';
import galleryPhotoItemTemplate from '../templates/gallery-list-item.hbs';

refs.searchForm.addEventListener(
  'input',
  debounce(searchFormSubmitHandler, 1000),
);

refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);
refs.loadMoreBtn.classList.add('hidden');

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const inputValue = e.target.value;
  clearListItems();
  searchService.resetPage();
  searchService.searchQuerry = inputValue;

  if (inputValue !== '') {
    fetchPhotos();
    refs.loadMoreBtn.classList.remove('hidden');
  } else {
    console.log('Please enter search query!');
  }
}

function loadMoreBtnHandler(e) {
  fetchPhotos();
}

function fetchPhotos() {
  spinner.show();
  searchService
    .fetchPictures()
    .then(photos => {
      spinner.hide();
      insertSearchListItems(photos);
    })
    .catch(error => {
      console.log(error);
    });
}

function insertSearchListItems(items) {
  const markup = galleryPhotoItemTemplate(items);

  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  refs.gallery.innerHTML = '';

  refs.loadMoreBtn.classList.add('hidden');
}
