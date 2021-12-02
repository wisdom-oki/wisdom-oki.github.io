//Array for images
const imagesArray = document.getElementsByClassName('gallery-image');
//Array for the image text
const textArray = document.getElementsByClassName('info-wrapper');
//Array for the image buttons image-button
const buttonArray = document.getElementsByClassName('image-button');
console.log(buttonArray);

function galleryButton(id) {
  //Hide all non-active iamges
  for (let i = 0; i < imagesArray.length; i++) {
    if (i != id) {
      imagesArray[i].classList.add('image-hidden');
      textArray[i].classList.add('info-hidden');
      buttonArray[i].classList.remove('button-active');
    } else {
      imagesArray[i].classList.remove('image-hidden');
      textArray[i].classList.remove('info-hidden');
      buttonArray[i].classList.add('button-active');
    }
  }
}
