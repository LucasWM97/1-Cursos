//const celular = 7199918888;
const celular = 99918888;
const celularString = String(celular)

if (celularString.length==10){
    //com DD
    let celularDDD = `(${celularString.slice(0,2)})`;
let celularNove=` 9 `; 
let celularPrimeiro= celularString.slice(2,6)
let celularFim = `-${celularString.slice(-4)}`
let celularConvertido = celularDDD + celularNove + celularPrimeiro + celularFim
console.log(celularConvertido)
}else if (celularString.length==8){
    //sem DD
    let celularNove=` 9 `; 
let celularPrimeiro= celularString.slice(2,6)
let celularFim = `-${celularString.slice(-4)}`
let celularConvertido = celularNove + celularPrimeiro + celularFim
console.log(celularConvertido)
}