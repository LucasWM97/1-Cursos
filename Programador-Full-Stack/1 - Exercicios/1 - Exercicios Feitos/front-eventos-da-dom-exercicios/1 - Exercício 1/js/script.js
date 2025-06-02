let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
const soma = document.querySelector("#add");
const subtracao = document.querySelector("#minus");
const dividir = document.querySelector("#divide")
const multiplicar = document.querySelector("#multiply")
const resultado = document.querySelector("h2")
let total = 0;

function somando() {
  if (!n1.value || !n2.value || n1.value == 0 || n2.value == 0) {
    resultado.textContent = "Preencha os dois numeros"
    return
  }
  total = parseFloat(n1.value) + parseFloat(n2.value)
  resultado.textContent = `Resultado: ${total}`
};

function subtraindo() {
  if (!n1.value || !n2.value || n1.value == 0 || n2.value == 0) {
    resultado.textContent = "Preencha os dois numeros"
    return
  }
  total = parseFloat(n1.value) - parseFloat(n2.value)
  resultado.textContent = `Resultado: ${total}`
};
function multiplicando() {
  if (!n1.value || !n2.value || n1.value == 0 || n2.value == 0) {
    resultado.textContent = "Preencha os dois numeros"
    return
  }
  total = parseFloat(n1.value) * parseFloat(n2.value)
  resultado.textContent = `Resultado: ${total}`

};
function dividindo() {
  if (!n1.value || !n2.value || n1.value == 0 || n2.value == 0) {
    resultado.textContent = "Preencha os dois numeros"
    return
  }
  total = parseFloat(n1.value) / parseFloat(n2.value)
  resultado.textContent = `Resultado: ${total}`
};

soma.addEventListener("click", somando)
subtracao.addEventListener("click", subtraindo)
dividir.addEventListener("click", dividindo)
multiplicar.addEventListener("click", multiplicando)




