import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryColection = document.querySelector('.gallery');
console.log(galleryColection);


const markup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ description, original, preview }) => {
    return `
    <li class="item"><a class="gallery__item" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
   </a></li>`
    }).join('');
  
}
galleryColection.insertAdjacentHTML("beforeend", markup);

galleryColection.addEventListener('click', onClickItem);
function onClickItem(event) {
    event.preventDefault();
   
    if (event.target.classList.contains('item')) {
    return;
    }
    console.log(event.target);
    var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition:'bottom', captionDelay: 250 });
    console.log(lightbox);
}

