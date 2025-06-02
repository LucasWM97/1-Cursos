const usuarios = [
    {
        nome: "João",
        idade: 25
    },
    {
        nome: "Ana",
        idade: 18
    },
    {
        nome: "Beatriz",
        idade: 15
    },
    {
        nome: "Carlos",
        idade: 16
    },
    {
        nome: "Antonio",
        idade: 32
    },
];
let jovens =[];
let adultos=[];
const maiorIdade=18;

for (usuario of usuarios){
    if (usuario.idade>maiorIdade){
        adultos.push(usuario);
    }else{
        jovens.push(usuario);
    }
}

console.log(`const jovens =`)
console.log(jovens);
console.log(`const adultos =`);
console.log(adultos);

