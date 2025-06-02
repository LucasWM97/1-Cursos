const cpf = "011.022.033-44";
function replaceAll(original,text,newText) {
    while(original!== original.replace(text,newText)){
        original = original.replace(text,newText)
        original = original.replace("-","");
        original = original.replace("/","")
    }
    return original;
}
let cpfFiltrado = replaceAll(cpf,".","")


console.log(cpfFiltrado)