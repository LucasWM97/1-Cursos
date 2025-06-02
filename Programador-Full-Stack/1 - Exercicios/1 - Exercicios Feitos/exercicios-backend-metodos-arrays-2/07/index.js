const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
  ];


  function QualARua(array,cep) {
    const procurando = array.find(function (cep2) {
        return cep2.cep == cep
    })
    const endereco = procurando ? procurando.rua : "CEP não encontrado" 
    console.log(endereco);
}

QualARua(endereços,11222333)
