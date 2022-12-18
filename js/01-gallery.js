import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const galleryColection = document.querySelector('.gallery');

const markup = createGalleryItemsMarkup(galleryItems);

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
    const isGalleryImage = event.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
        return;
    }

    const dataSourceValue = event.target.dataset.source;
    console.log(dataSourceValue)

    galleryColection.addEventListener('keydown', onEsc);

   function onEsc(event) {
    if (event.code === "Escape"){
        instance.close();
        console.log(event)
    }
    }
    
    const options = {
    closable: true,
    onShow:  (instance) => { document.addEventListener('keydown', onEsc); },
	onClose: (instance) => { document.removeEventListener('keydown', onEsc); },
    }

    
    const instance = basicLightbox.create(`
    <img src="${dataSourceValue}" width="800" height="600">`, options);

    instance.show()
   
   
}





