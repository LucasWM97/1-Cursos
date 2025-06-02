const inputName = document.querySelector("#name-profile");
const inputEmail = document.querySelector("#email-profile");
const inputPassword = document.querySelector("#password-profile");
const form = document.querySelector("#form-profile");
const token = localStorage.getItem("token")
const btnSignOut = document.querySelector(".sign-out-button")
const btnDelete = document.querySelector("#form-profile .btn-cancel")

async function loadProfileData() {
  try {

    const response = await api.get("/usuarios", {
      headers: {
        "Authorization": token
      }
    })
    const { nome, email } = response.data;
    inputEmail.value = email;
    inputName.value = nome;
  } catch (error) {
    console.log(error.response.data)
  }


}

loadProfileData();


async function updateUserData() {
  try {
    const response = await api.put("/usuarios",
      {
        nome: inputName.value,
        email: inputEmail.value,
        senha: inputPassword.value
      },
      {
        headers: {
          "Authorization": token
        }
      }

    )
    console.log(response.data)
  } catch (error) {
    console.log(error.response.data)
  }

}

form.addEventListener("submit", function (event) {
  event.stopPropagation()
  event.preventDefault()

  if (!inputEmail.value || !inputName.value || !inputPassword) {
    console.log("Preencha as informações de nome, email e senha");
    return
  }
  updateUserData()
})


btnSignOut.addEventListener("click", function () {
  localStorage.removeItem("token")
  window.location.href = "../../index.html"
})

btnDelete.addEventListener("click", async function () {
  try {
    const response = await api.delete("/usuarios", {
      headers: {
        "Authorization": token
      }
    })
    if (response.status === 200) {
      window.location.href = "../../index.html"

    }
  } catch (error) {
    console.log(error.response.data)
  }

})