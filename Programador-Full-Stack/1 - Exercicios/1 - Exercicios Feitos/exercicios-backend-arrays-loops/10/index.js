const numeros = [8, 11, 4, 1];

// seu codigo aqui
let maior = 0;
let menor = numeros[0];

for (i=0;i<numeros.length;i++){
    if (numeros[i]>maior){
        maior = numeros[i];
    }
    else{
        menor = numeros[i];
    }
}
let diferenca = maior - menor;

console.log(diferenca);