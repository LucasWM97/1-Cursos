
const redBox = document.querySelector(".box.red");
const blueBox = document.querySelector(".box.blue");
const purpleBox = document.querySelector(".box.purple");
const orangeBox = document.querySelector(".box.orange");
const button = document.querySelector("button");
const resultado = document.querySelector(".h2-result");
const container = document.querySelectorAll(".box")

let numeroEscolhido = -1;

function unselectAllBoxes() {
  for (const item of container) {
    item.classList.replace("selected", "normal")
  }
}

redBox.onclick = function () {
  numeroEscolhido = 0;
  unselectAllBoxes()
  redBox.classList.toggle("selected")
}
blueBox.onclick = function () {
  numeroEscolhido = 1;
  unselectAllBoxes()
  blueBox.classList.toggle("selected")
}
purpleBox.onclick = function () {
  numeroEscolhido = 2;
  unselectAllBoxes()
  purpleBox.classList.toggle("selected")
}
orangeBox.onclick = function () {
  numeroEscolhido = 3;
  unselectAllBoxes()
  orangeBox.classList.toggle("selected")
}


button.onclick = function () {
  let aleatoryPosition = Math.floor(Math.random() * 4);
  if (numeroEscolhido === -1) {
    resultado.textContent = " Selecione uma cor para sortear!"
    return
  }
  if (numeroEscolhido === aleatoryPosition) {
    resultado.textContent = "Parabéns você acertou!"
    unselectAllBoxes()
    numeroEscolhido = -1
  } else {
    resultado.textContent = "Tente novamente!"
    unselectAllBoxes()
    numeroEscolhido = -1
  }
}
