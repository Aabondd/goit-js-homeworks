'use strict';

/*
- Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного
изображения в модальном окне.

- Создание и рендер разметки по массиву данных и предоставленному шаблону.
- Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
- Открытие модального окна по клику на элементе галереи.
- Подмена значения атрибута src элемента img.lightbox__image.
- Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
- Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того,
чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

Закрытие модального окна по клику на div.lightbox__overlay.
Закрытие модального окна по нажатию клавиши ESC.
*/

import galleryItems from './gallery-items.js';

const refs = {
  galleryItemsList: document.querySelector('.js-gallery'),
  lightboxWindow: document.querySelector('.js-lightbox'),
  lightboxCloseBtn: document.querySelector('.lightbox__button'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
  displayedImage: document.querySelector('.lightbox__image'),
};

refs.galleryItemsList.addEventListener('click', handleOpenLightbox);
refs.lightboxCloseBtn.addEventListener('click', handleCloseLightbox);
refs.lightboxWindow.addEventListener('click', handlLightboxOverlayClick);

//-------- Preview nav -----------------

// window.addEventListener('keydown', handleNextPic);
// window.addEventListener('keydown', handlePrevPic);

// function handleNextPic(e) {
//   if (event.code === 'ArrowRight') {
//     // console.log(event.target);
//     const nextSibling = event.target.parentNode.nextSibling;
//     const nextImgScr =
//       nextSibling.lastElementChild.firstElementChild.dataset.source;

//     refs.displayedImage.setAttribute('src', nextImgScr);
//   }
// }

// function handlePrevPic(e) {
//   if (event.code === 'ArrowLeft') {
//     // console.log(event.target);
//     const previousSibling = event.target.parentNode.previousSibling;
//     const prevImgScr =
//       previousSibling.lastElementChild.firstElementChild.dataset.source;

//     refs.displayedImage.setAttribute('src', prevImgScr);
//   }
// }

//---------

function handleOpenLightbox(e) {
  e.preventDefault();

  refs.lightboxWindow.classList.add('is-open');

  const imageSrc = event.target.dataset.source;

  refs.displayedImage.setAttribute('src', imageSrc);

  window.addEventListener('keydown', handleKeyPress);
}

function handleCloseLightbox(e) {
  refs.lightboxWindow.classList.remove('is-open');
  refs.displayedImage.setAttribute('src', '');
  window.removeEventListener('keydown', handleKeyPress);
}

function handlLightboxOverlayClick(e) {
  const lightboxContent = document.querySelector('.lightbox__content');

  if (event.target === lightboxContent) {
    handleCloseLightbox();
  }
}

function handleKeyPress(e) {
  if (event.code !== 'Escape') {
    return;
  }
  handleCloseLightbox();
}

// Create markup template

function gellaryItemMarkup(item) {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`;
}

const buildGalleryItem = galleryItems.reduce(
  (acc, el) => (acc += gellaryItemMarkup(el)),
  '',
);

function appendGalleryItems(parentRef, galleryItem) {
  parentRef.insertAdjacentHTML('beforeend', galleryItem);
}

appendGalleryItems(refs.galleryItemsList, buildGalleryItem);
