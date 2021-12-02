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
    } else {
      imagesArray[i].classList.remove('image-hidden');
    }
  }
  //Hide all non-active text
  for (let i = 0; i < textArray.length; i++) {
    if (i != id) {
      textArray[i].classList.add('info-hidden');
    } else {
      textArray[i].classList.remove('info-hidden');
    }
  }
  //Hide all non-active buttons
  for (let i = 0; i < textArray.length; i++) {
    if (i != id) {
      buttonArray[i].classList.remove('button-active');
    } else {
      buttonArray[i].classList.add('button-active');
    }
  }
}
