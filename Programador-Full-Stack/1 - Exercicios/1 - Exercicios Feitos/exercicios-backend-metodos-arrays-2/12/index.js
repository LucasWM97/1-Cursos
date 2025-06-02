const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];


  function programadores(array) {
    const filtrando = array.filter(function (pessoa) {
        return pessoa.idade >20 && pessoa.profissao == "Programador"
    })
    console.log(filtrando);
  }
  function jornalistas(array) {
    const filtrando = array.filter(function (pessoa) {
        return pessoa.idade >30 && pessoa.profissao == "Jornalista"
    })
    console.log(filtrando);
  }
  function programadoresEJornalistas(array) {
    const filtrando = array.filter(function (pessoa) {
        return pessoa.idade <=29 && (pessoa.profissao == "Programador"||pessoa.profissao == "Jornalista")
    })
    console.log(filtrando);
  }

  programadores(pessoas)
  jornalistas(pessoas)
  programadoresEJornalistas(pessoas)

  