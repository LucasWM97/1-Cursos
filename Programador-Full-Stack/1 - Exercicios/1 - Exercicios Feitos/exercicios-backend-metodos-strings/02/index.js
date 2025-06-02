const cpf = "12345678900";//funciona
 //const cpf = "12309"; // invalido


 const cnpj = "12345678000199";//funciona
//const cnpj = "12345678900"; // invalido



 if (cpf.length < 11){
     console.log("CPF Inválido");
 }else {
let parte1 = cpf.slice(0,3)
let parte2 = cpf.slice(3,6)
let parte3 = cpf.slice(6,9)
let parte4 = cpf.slice(-2);
let cpfTransformado = `${parte1}.${parte2}.${parte3}-${parte4}`
console.log(cpfTransformado)
}

if (cnpj.length<14){
    console.log("CNPJ Inválido");
}else {
    let cnpj1 = cnpj.slice(0,2);
    let cnpj2 = cnpj.slice(2,5);
    let cnpj3 = cnpj.slice(5,8);
    let cnpj4 = cnpj.slice(8,12)
    let cnpj5 = cnpj.slice(-2)
    let cnpjTransformado =`${cnpj1}.${cnpj2}.${cnpj3}/${cnpj4}-${cnpj5}`

    console.log(cnpjTransformado)
}
