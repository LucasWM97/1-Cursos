const numeros = [10, 987, -886, 0, 12, 199, -45, -67]


function soPositivos(array) {
    const numerosPositivos = array.filter(function (numero) {
        return numero > 0
    })
    console.log(numerosPositivos)
}


soPositivos(numeros)