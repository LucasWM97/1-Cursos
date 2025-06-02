    let populacaoInicial = prompt("Qual o valor total da população inicialmente infectada?");
    let capacidadeDeInfectar = prompt("Quantidade de pessoas que um paciente infectado pode transmitir?");
    let tempo = prompt("Tempo percorrido");

    let pessoasInfectadas = parseFloat(populacaoInicial) * parseFloat(capacidadeDeInfectar)**(parseFloat(tempo) / 7);

    console.log(`O total de pessoas infectadas será de ${pessoasInfectadas}`);