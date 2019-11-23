'use strict';
import images from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');

const lightbox = document.querySelector('.js-lightbox');

const lightboxImage = document.querySelector('.js-lightbox__image');

const closeButton = document.querySelector(
    '.js-lightbox button[data-action="close-lightbox"]',
);

const closeOverlay = document.querySelector('.js-lightbox__overlay');

const marcup = renderingMarkup(images);

function renderingMarkup(array) {
    const markup = array
        .map(
            element => `<li class="gallery__item">
    <a
        class="gallery__link"
        href="${element.original}"
    >
        <img
            class="gallery__image"
            src="${element.preview}"
            data-source="${element.original}"
            alt="${element.description}"
        />

        <span class="gallery__icon">
            <i class="material-icons">zoom_out_map</i>
        </span>
    </a>
</li>`,
        )
        .join('');
    return markup;
}

gallery.insertAdjacentHTML('afterbegin', marcup);

gallery.addEventListener('click', handleOpenGalleryClick);
closeButton.addEventListener('click', handleCloseButton);
lightbox.addEventListener('click', handleCloseOverlay);

function handleOpenGalleryClick(event) {
    event.preventDefault();
    const target = event.target;
    const bigImgSrc = target.dataset.source;
    const bigImgAlt = target.alt;
    lightbox.classList.add('is-open');
    lightboxImage.setAttribute('src', bigImgSrc);
    lightboxImage.setAttribute('alt', bigImgAlt);
    window.addEventListener('keydown', handleKeyPress);
}

function handleCloseButton() {
    lightbox.classList.remove('is-open');
    lightboxImage.removeAttribute('src');
    window.removeEventListener('keydown', handleKeyPress);
}

function handleCloseOverlay() {
    if (event.target === lightboxImage) {
        return;
    }
    handleCloseButton();
}

function handleKeyPress(event) {
    if (event.code !== 'Escape') {
        return;
    }
    handleCloseButton();
}
