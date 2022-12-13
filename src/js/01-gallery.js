import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const galleryColection = document.querySelector('.gallery');
console.log(galleryColection);


const markup = createGalleryItemsMarkup(galleryItems);
//console.log(markup);
function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ description, original, preview }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
   </a>
   </div>`
    }).join('');
  
}
galleryColection.insertAdjacentHTML("beforeend", markup);


galleryColection.addEventListener('click', onClickItem);

function onClickItem(event) {
    event.preventDefault();
   
   if (event.target.classList.contains('gallery__item')) {
    return;
    } 
    console.log(event.target.dataset.source);
    
    
    const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()

}  

