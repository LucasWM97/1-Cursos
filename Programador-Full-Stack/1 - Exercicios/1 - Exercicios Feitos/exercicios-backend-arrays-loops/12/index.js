//const filaDeDentro = ["Jose", "Maria", "Joao"];
//const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];
const limite = 5;
// seu codigo aqui

for (i=0;i<filaDeDentro.length;i++){
    if (filaDeDentro.length<limite){
        filaDeDentro.push(filaDeFora[0]); 
        filaDeFora.shift();
    }
}

console.log(filaDeDentro);

console.log(filaDeFora);