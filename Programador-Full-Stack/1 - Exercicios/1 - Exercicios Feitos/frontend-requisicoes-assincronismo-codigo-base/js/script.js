const form = document.querySelector("#form-sign-in")
const inputEmail = document.querySelector("#email-sign-in")
const inputPassword = document.querySelector("#password-sign-in")


async function makeLogin() {
  try {
    const response = await api.post("/login", {
      email: inputEmail.value,
      senha: inputPassword.value
    })

    const { token } = response.data
    localStorage.setItem("token", token)

    if (response.status === 200) {
      window.location.href = "./pages/home/index.html"
    }

  } catch (error) {
    console.log(error.response.data)
  }
}
form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();
  if (!inputEmail.value || !inputPassword.value) {
    console.log("Preencha e-mail e senha")
    return;
  }
  makeLogin()
})
