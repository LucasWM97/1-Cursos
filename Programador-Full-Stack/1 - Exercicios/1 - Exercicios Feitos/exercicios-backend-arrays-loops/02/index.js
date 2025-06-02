const letras = ["A", "a", "B", "C", "z", "d"];
let temE = false;
let i = 0;


for ( let letra of letras){
    if (letra=="e"||letra=="E"){
        i++;
        temE = true;
    }
}
if (!temE){
    console.log("Nenhuma letra E ou e foi encontrada.");
}else {
    console.log(`Foram encontrados ${i} letras "E" ou "e".`);
}