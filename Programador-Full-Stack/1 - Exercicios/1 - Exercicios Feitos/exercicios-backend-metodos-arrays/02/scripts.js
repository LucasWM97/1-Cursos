const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;
let grupo1=[];
let grupo2=[];

function divisaoDeGrupos(nomes,tamanhoDoGrupo) {
    grupo1 = nomes.slice(0,tamanhoDoGrupo)
grupo2 = nomes.slice(tamanhoDoGrupo,nomes.length) 
console.log(grupo1);
console.log(grupo2)
}

divisaoDeGrupos(nomes,tamanhoDoGrupo)



