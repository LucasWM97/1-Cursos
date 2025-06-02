let raioDaBase = prompt("Digite o valor do raio da base: ");
let alturaDoCilindro = prompt("Digite a altura do cilindro: ");

areaTotalDoCilindro = 2*Math.PI*parseFloat(raioDaBase)*(parseFloat(raioDaBase)+parseFloat(alturaDoCilindro));
console.log(`Area total do Cilindro(com PI) : ${areaTotalDoCilindro}`);
areaTotalDoCilindro = 2*parseFloat(raioDaBase)*(parseFloat(raioDaBase)+parseFloat(alturaDoCilindro));
console.log(`Area total do Cilindro(sem PI) : ${areaTotalDoCilindro}pi`);