const ash = document.querySelector(".ash");
let somaVertical = 17;
let somaHorizontal = 81;;

let esquerda = document.addEventListener("keydown", function (event) {
  if (event.keyCode === 37) {
    ash.src = "assets/left.png";
  }
  if (somaHorizontal < 40) {
    return
  }
  if (event.keyCode === 37) {
    ash.style.left = `${somaHorizontal -= 4.7}%`;
  }
});

let cima = document.addEventListener("keydown", function (event) {
  if (event.keyCode === 38) {
    ash.src = "assets/back.png"
  }
  if (somaVertical < 18) {
    return
  }
  if (event.keyCode === 38) {
    ash.style.top = `${somaVertical -= 9.5}%`;
  }
});

let direita = document.addEventListener("keydown", function (event) {
  if (event.keyCode === 39) {
    ash.src = "assets/right.png"
  }
  if (somaHorizontal > 80) {
    return
  }
  if (event.keyCode === 39) {
    ash.style.left = `${somaHorizontal += 4.7}%`;
    ash.src = "assets/right.png"
  }
});

let baixo = document.addEventListener("keydown", function (event) {
  if (event.keyCode === 40) {
    ash.src = "assets/front.png"
  }
  if (somaVertical > 73) {
    return
  }
  if (event.keyCode === 40) {
    ash.style.top = `${somaVertical += 9.5}%`
  }
});