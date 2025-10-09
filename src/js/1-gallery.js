const gallery = document.querySelector('.gallery');

const images = [
  {
    preview:
      './img/plan-min.jpg',
    original:
      './img/plan@4x-min.jpg',
    description: 'Planning Project',
  },
  {
    preview:
      './img/lamp-min.jpg',
    original:
      './img/lamp@4x-min.jpg',
    description: 'A Bulb In Hand',
  },
  {
    preview:
      './img/dev-motto-min.jpg',
    original:
      './img/dev-motto@4x-min.jpg',
    description: 'A Motto On The Phone Screen',
  },
  {
    preview:
      './img/mettroom-min.jpg',
    original:
      './img/mettroom@4x-min.jpg',
    description: 'Meeting Room',
  },
  {
    preview:
      './img/chillroom-min.jpg',
    original:
      './img/chillroom@4x-min.jpg',
    description: 'Leisure Room',
  },
  {
    preview:
      './img/office-min.jpg',
    original:
      './img/office@4x-min.jpg',
    description: 'IT Company Office',
  },
  {
    preview:
      './img/workspace-min.jpg',
    original:
      './img/workspace@4x-min.jpg',
    description: 'Workspace',
  },
  {
    preview:
      './img/work-min.jpg',
    original:
      './img/work@4x-min.jpg',
    description: 'Girl Working At The Computer',
  },
  {
    preview:
      './img/meet-min.jpg',
    original:
      './img/meet@4x-min.jpg',
    description: 'Working Meeting',
  },
];

// create a string with all <li> elements
const markup = images
  .map(
    ({ preview, original, description }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');

// add all markup in list
gallery.insertAdjacentHTML('beforeend', markup);
// import library
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});