const form = document.querySelector("form")
const inputName = document.querySelector("#input-name")
const inputEmail = document.querySelector("#input-email")
const inputPassword = document.querySelector("#input-password")
const inputBirthDay = document.querySelector("#input-birthday")
const strong = document.querySelector("strong")



form.addEventListener("submit", function (event) {
  event.preventDefault()
  strong.textContent = "";
  if (inputName.value === "") {
    strong.textContent = "Digite um nome";
    return
  }
  if (inputName.value.length < 10) {
    strong.textContent = "O nome precisa de mais de 10 caracteres!";
    return
  }

  if (inputEmail.value === "") {
    strong.textContent = "Digite um e-mail!"
    return
  }

  if (inputEmail.value.indexOf("hotmail") === -1) {
    strong.textContent = "Digite um email hotmail!"
    return
  }

  if (inputBirthDay.value < 1923 || inputBirthDay.value > 2023) {
    strong.textContent = "Digite um ano Válido"
    return
  }
  const select = document.querySelector("select");
  const selectedCity = select.options[select.selectedIndex].value;

  if (selectedCity === "empty") {
    strong.textContent = "Escolha uma cidade para a prova"
    return
  }

  const selectedRadio = document.querySelector("input[type='radio']:checked");
  if (!selectedRadio) {
    strong.textContent = "Selecione um período"
    return
  }


  const checkedBoxes = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(checkbox => checkbox.value);

  if (checkedBoxes.length <= 0) {
    strong.textContent = "Selecione em qual curso voce tem interesse"
    return
  }
  if (inputPassword.value == "") {
    strong.textContent = "Digite uma senha"
    return
  } else if (inputPassword.value.length < 8) {
    strong.textContent = "Uma senha com no mínimo oito caracteres"
    return
  }


  const data = {
    name: inputName.value,
    email: inputEmail.value,
    city: selectedCity,
    password: inputPassword.value,
    birthday: inputBirthDay.value,
    period: selectedRadio.value,
    courses: checkedBoxes

  }


  strong.textContent = "Parabens, cadastro efetuado com sucesso!"

})

