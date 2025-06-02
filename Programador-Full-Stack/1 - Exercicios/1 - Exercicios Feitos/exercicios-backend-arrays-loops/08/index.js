//const numeros = [3, 24, 1, 8, 11, 7, 15];
const numeros = [3, 4, 1, 8, 11, 7, 5];

// seu codigo aqui
let maior = 0;

for (i=0;i<numeros.length;i++){
    if (numeros[i]>maior){
        maior = numeros[i];
    }
}
console.log(maior);