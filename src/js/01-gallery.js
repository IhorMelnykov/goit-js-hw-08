import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");
const imagesMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
    
        return `  
           <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery__item', {
    captionDelay: 250,
    captionsData: "alt",
 });

