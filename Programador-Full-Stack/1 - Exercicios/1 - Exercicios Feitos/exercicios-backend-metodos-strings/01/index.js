const comentario = "Esse covid é muito perigoso!";

const maiusculo = "COVID";
const minusculo = "covid";

let temPalavraProibida = comentario.includes(maiusculo)||comentario.includes(minusculo)?"Comentário bloqueado por conter palavras proibidas": "Não tem palavra proibida";

console.log(temPalavraProibida)