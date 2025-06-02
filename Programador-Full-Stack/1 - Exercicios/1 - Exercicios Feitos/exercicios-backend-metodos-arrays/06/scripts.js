const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
let temDono;
function acharDono(nomePet,lista) {   
for (let i =0;i<lista.length;i++){
    for(let j=0;j<lista.length;j++){
    if (nomePet==lista[i].pets[j]){
        nomeDono= lista[i].nome;
        temDono= true;
    }
}
}
let testeDono = temDono ? `O dono(a) do ${nomePet} é o ${nomeDono}` : `Que pena ${nomePet},não encontramos seu dono(a).`;
console.log(testeDono)
}


acharDono("Batata",usuarios)