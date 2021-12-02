//Array for images
const previewImages = document.getElementsByClassName('preview-image-wrapper');
//Array for the image text
const mainImages = document.getElementsByClassName('gallery-image-wrapper');

function galleryButton(id) {
  //Hide all non-active iamges
  for (let i = 0; i < previewImages.length; i++) {
    if (i != id) {
      //hide non-active images/text
      previewImages[i].classList.remove('active');
      mainImages[i].classList.add('hidden');
    } else {
      //show active image/text
      previewImages[i].classList.add('active');
      mainImages[i].classList.remove('hidden');
    }
  }
}
