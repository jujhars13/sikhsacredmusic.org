// @NOTE: Remember to import your code here.

import './mobile_navbar_toggle'

document.addEventListener('DOMContentLoaded', function() {
    // Get the image element
    const image = document.querySelector('#hero_image');
    const randomNumber = Math.floor(Math.random() * 5);
    const paddedNumber = randomNumber.toString().padStart(2, '0');
    image.src = `/images/featured_image_${paddedNumber}.jpg`;
});
