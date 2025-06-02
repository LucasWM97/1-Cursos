const emailLogin = document.querySelector("#email-login");
const passwordLogin = document.querySelector("#email-password");
const emailSpan = document.querySelector("#email-span");
const passwordSpan = document.querySelector("#password-span");
const loginButton = document.querySelector("#login-button");
const form = document.querySelector("form")

form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  emailSpan.textContent = "";
  passwordSpan.textContent = "";

  if (!emailLogin.value) {
    passwordSpan.textContent = "Digite o seu email"
    return

  }
  if (!passwordLogin.value) {
    passwordSpan.textContent = "Digite a sua senha"
    return
  }
  window.location = "../3 - paginaMain/index.html"
})

const a = document.querySelector("a")
a.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  window.location = "../2 - signUp/index.html"
})