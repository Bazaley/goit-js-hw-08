// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryLinks = renderGallery(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryLinks);

galleryRef.addEventListener('click', onGalleryClick);

function renderGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        ` <a class='gallery__link' href="${original}">
          <img class='gallery__image' src="${preview}" alt="${description}" title="${description}"/>
        </a>`
    )
    .join('');
}

function onGalleryClick(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
