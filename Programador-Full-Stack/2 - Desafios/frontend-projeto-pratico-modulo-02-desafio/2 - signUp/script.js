const a = document.querySelector("a")
const alert = document.querySelector("#alert")
const nameRegister = document.querySelector("#name-register")
const emailRegister = document.querySelector("#email-register")
const passwordRegister = document.querySelector("#password-register")
const form = document.querySelector("form")
const registerButton = document.querySelector("#register-button")
const cancelButton = document.querySelector("#cancel-button")

cancelButton.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  nameRegister.value = ""
  passwordRegister.value = ""
  emailRegister.value = ""
  alert.textContent = ""
  window.location = "../1 - signIn/index.html"
  return
})

form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (!nameRegister.value) {
    alert.textContent = "Digite um nome"
    return
  }
  if (!emailRegister.value) {
    alert.textContent = "Digite um e-mail"
    return
  }
  if (!passwordRegister.value) {
    alert.textContent = "Digite uma senha"
    return
  }

  nameRegister.value = ""
  emailRegister.value = ""
  passwordRegister.value = ""
  alert.textContent = "Voce foi cadastrado com sucesso"
  setInterval(window.location = "../1 - signIn/index.html", 100)

})


a.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  window.location = "../1 - signIn/index.html"
})