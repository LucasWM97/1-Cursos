const nomes = ["Ana", "Joana", "Carlos", "amanda","Zipora"];
const nomesComA= [];

for (i=0; i<nomes.length;i++){
    if (nomes[i][0]==="a"||nomes[i][0]==="A")
    nomesComA.push(nomes[i]);
}

console.log(nomesComA)