const logOff = document.querySelector("#logoff");
const addButton = document.querySelector("#button-add");
const newContact = document.querySelector("#contact-new");
const blackBackground = document.querySelector("#black-background");
const closeBottom = document.querySelector("#bottom-close");
const closeBottom2 = document.querySelector("#bottom-close2");
const excluirBottom = document.querySelector("#bottom-excluir");
const lixeira1 = document.querySelectorAll("img")[1];
const lixeira2 = document.querySelectorAll("img")[2];
const lixeira3 = document.querySelectorAll("img")[3];
const lixeira4 = document.querySelectorAll("img")[4];
const lixeira5 = document.querySelectorAll("img")[5];
const lixeira6 = document.querySelectorAll("img")[6];
const excludeButton = document.querySelector("#exclude-bottom")
const cancelButton = document.querySelector("#cancel-button")
const form = document.querySelector("form")
const newEmail = document.querySelector("#new-email");
const newName = document.querySelector("#new-name")
const newCellphone = document.querySelector("#phone");
const alert = document.querySelector("#alert")
const botaoVerde = document.querySelector("#button-green")
const botaoVermelho = document.querySelector("#red-button")
logOff.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  window.location = "../1 - signIn/index.html"
})

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  newContact.style.visibility = "visible"
  blackBackground.style.visibility = "visible"
})

closeBottom.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  newContact.style.visibility = "hidden"
  blackBackground.style.visibility = "hidden"

})

lixeira1.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  excluirBottom.style.visibility = "visible"
  blackBackground.style.visibility = "visible"
})

lixeira2.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  excluirBottom.style.visibility = "visible"
  blackBackground.style.visibility = "visible"
})
lixeira3.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  excluirBottom.style.visibility = "visible"
  blackBackground.style.visibility = "visible"
})
lixeira4.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  excluirBottom.style.visibility = "visible"
  blackBackground.style.visibility = "visible"
})
lixeira5.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  excluirBottom.style.visibility = "visible"
  blackBackground.style.visibility = "visible"
})
lixeira6.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  excluirBottom.style.visibility = "visible"
  blackBackground.style.visibility = "visible"
})

closeBottom2.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  excluirBottom.style.visibility = "hidden"
  blackBackground.style.visibility = "hidden"
});

excludeButton.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  excluirBottom.style.visibility = "hidden"
  blackBackground.style.visibility = "hidden"
});
cancelButton.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  excluirBottom.style.visibility = "hidden"
  blackBackground.style.visibility = "hidden"
});
form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();
  alert.textContent = "";
  if (!newName.value) {
    alert.textContent = "Digite um nome"
    return

  }
  if (!newEmail.value) {
    alert.textContent = "Digite um e-mail"
    return
  }
  if (!newCellphone.value) {
    alert.textContent = "Digite um telefone"
    return
  }

  botaoVerde.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    newContact.style.visibility = "hidden"
    blackBackground.style.visibility = "hidden"
    newCellphone.textContent = ""
    newEmail.textContent = ""
    newName.textContent = ""
  })

})

botaoVermelho.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  newContact.style.visibility = "hidden"
  blackBackground.style.visibility = "hidden"
  newCellphone.value = "";
  newEmail.value = "";
  newName.value = "";
  alert.value = ""
  return
})