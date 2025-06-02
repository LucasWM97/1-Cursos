let position = 0;
let image = document.getElementById("walking-image");
let images = ["assets/1.png", "assets/2.png", "assets/3.png", "assets/4.png", "assets/5.png", "assets/6.png", "assets/7.png", "assets/8.png"];
let currentImage = 0;
let body = document.querySelector("body")

setInterval(function () {
  currentImage = (currentImage + 1) % images.length;
  image.src = images[currentImage];
  position += 15;
  image.style.left = position + "px";
  if (position + image.offsetWidth >= body.offsetWidth) {
    position = 20;
  }
}, 130);