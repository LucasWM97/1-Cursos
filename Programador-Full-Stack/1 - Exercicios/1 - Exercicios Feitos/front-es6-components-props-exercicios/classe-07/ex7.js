function sum(...args) {
  const somaNumeros =args.reduce((acum,val)=>acum+val);
return console.log(somaNumeros);
}
sum(2,3)

function dobro(arg) {
 const dobroNumeros = arg.map(function (arg) {
  return arg*2
 }) 
 console.log(dobroNumeros)
}

const array = [1,2,3,4,5];
dobro(array)

function impar(arg) {
  const numerosImpares = arg.map(function (arg) {
    if(arg%2 !== 0){
      return arg
   } 
  }).filter(function (arg) {
    return   arg  !== undefined
  })
  console.log(numerosImpares)
 }

 impar(array)

const array1 = [1,2,3];
const array2 = [4,5,6];
const array1AndArray2 = [...array1,...array2];
console.log(array1AndArray2);

const pessoa = {
  nome:"Joao",
  idade:30,
  endereco:{
    rua:"Rua A",
    numero:123,
  }
}

const {nome,idade,endereco:{rua,numeros}} = pessoa;
console.log(nome,idade, rua)

function imprimiTudo({arg}) {
  console.log(nome,idade)
}

imprimiTudo(pessoa)


const arrayCopiar = [1,2,3,4,5]
const copiado = [...arrayCopiar,6]
console.log(copiado)

const ultimoArray = [1,2,3,4,5];
const [valor1,valor2,...outrosValores] = ultimoArray;
console.log(valor1,valor2,outrosValores)