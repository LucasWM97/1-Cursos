const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
];
const pessoaProcurada = "Carlos";
let i=1;
for (participante of participantes){
    if (participante.nome === pessoaProcurada){
        console.log(`Galera... O ${pessoaProcurada} está na posição ${i}, corre lá`)
    }
    i++;
}
