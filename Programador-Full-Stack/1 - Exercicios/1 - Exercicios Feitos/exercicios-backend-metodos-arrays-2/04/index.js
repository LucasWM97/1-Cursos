const numeros = [0, 122, 4, 6, 7, 8, 44]//array invalido
// const numeros = [0, 122, 4, 6, 2, 8, 44] // array valido

function numerosPares(array) {
    const soPar = array.every(function (numeros) {
        return numeros%2==0;
    })
    const testeFinal = soPar ? "array válido": "array inválido";
    console.log(testeFinal)
}

numerosPares(numeros)