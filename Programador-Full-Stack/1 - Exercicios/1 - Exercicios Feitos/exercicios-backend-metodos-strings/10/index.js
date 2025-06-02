// const nomeArquivo = 'Foto da Familia.pdf';//Invalido
const nomeArquivo = 'Foto da Familia.png';//Valido


function validacao(arquivo) {
    let temJpg = arquivo.includes("jpg");
    let temJpeg= arquivo.includes("jpeg");
    let temGif = arquivo.includes("gif");
    let temPng = arquivo.includes("png");
    if (temJpg||temJpeg||temGif||temPng){
        console.log("Arquivo Válido");
    }else{
        console.log("Arquivo inválido")
    }
}

validacao(nomeArquivo);