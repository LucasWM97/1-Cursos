const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let i = 0;

function corrigirProva(prova) {
    for(prova.questao of prova.questoes){
        if(prova.questao.resposta==prova.questao.correta){
            i++
        }    
}
let total = i * (prova.valor/prova.questoes.length);
console.log(`O aluno(a) ${prova.aluno} acertou ${i} questões e obteve nota ${total} `)
}

corrigirProva(prova);