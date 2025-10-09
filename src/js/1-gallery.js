const gallery = document.querySelector('.gallery');

const images = [
  {
    preview:
      './public/plan-min.jpg',
    original:
      './public/plan@4x-min.jpg',
    description: 'Planning Project',
  },
  {
    preview:
      './public/lamp-min.jpg',
    original:
      './public/lamp@4x-min.jpg',
    description: 'A Bulb In Hand',
  },
  {
    preview:
      './public/dev-motto-min.jpg',
    original:
      './public/dev-motto@4x-min.jpg',
    description: 'A Motto On The Phone Screen',
  },
  {
    preview:
      './public/mettroom-min.jpg',
    original:
      './public/mettroom@4x-min.jpg',
    description: 'Meeting Room',
  },
  {
    preview:
      './public/chillroom-min.jpg',
    original:
      './public/chillroom@4x-min.jpg',
    description: 'Leisure Room',
  },
  {
    preview:
      './public/office-min.jpg',
    original:
      './public/office@4x-min.jpg',
    description: 'IT Company Office',
  },
  {
    preview:
      './public/workspace-min.jpg',
    original:
      './public/workspace@4x-min.jpg',
    description: 'Workspace',
  },
  {
    preview:
      './public/work-min.jpg',
    original:
      './public/work@4x-min.jpg',
    description: 'Girl Working At The Computer',
  },
  {
    preview:
      './public/meet-min.jpg',
    original:
      './public/meet@4x-min.jpg',
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