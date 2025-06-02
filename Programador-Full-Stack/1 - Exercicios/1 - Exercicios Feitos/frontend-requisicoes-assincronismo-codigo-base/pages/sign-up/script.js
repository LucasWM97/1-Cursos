const form = document.querySelector("#form-sign-up");
const inputName = document.querySelector("#name-sign-up")
const inputEmail = document.querySelector("#email-sign-up")
const inputPassword = document.querySelector("#password-sign-up")
const btnCancel = document.querySelector("#form-sign-up .btn-cancel")

async function registerUser() {
  try {
    const response = await api.post('/usuarios', {
      nome: inputName.value,
      email: inputEmail.value,
      senha: inputPassword.value
    });

    if (response.status === 200) {
      window.location.href = "../../index.html"
    }
    console.log(response)

  } catch (error) {
    console.log(error.response.data)

  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();
  if (!inputName.value || !inputEmail.value || !inputPassword.value) {
    console.log("Preencha todos os campos ...")
    console.log(inputName.value)
    console.log(inputEmail.value)
    console.log(inputPassword.value)
    return
  }
  registerUser();
})

btnCancel.addEventListener("click", function () {
  inputEmail.value = "";
  inputName.value = "";
  inputPassword.value = "";

})