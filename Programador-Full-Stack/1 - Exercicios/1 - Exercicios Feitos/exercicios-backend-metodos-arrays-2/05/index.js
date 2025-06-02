const usuários = [
    {
      nome: "André",
      idade: 29,
      habilitado: false,
    },
    {
      nome: "Marcos",
      idade: 70,
      habilitado: true,
    },
    {
      nome: "Ana",
      idade: 35,
      habilitado: true,
    },
    {
      nome: "Vinícius",
      idade: 44,
      habilitado: true,
    },
    {
      nome: "Carlos",
      idade: 17,
      habilitado: false,
    },
    {
      nome: "Maria",
      idade: 19,
      habilitado: true,
    },
  ];


  function habilitados(array) {
    const adultos = array.filter(function (idade) {
        return idade.idade >= 18 && idade.idade <=65
    })
    const todosHabilitados = adultos.every(function (habilitado) {
        return habilitado.habilitado == true 
    })
    const mensagem = todosHabilitados ? "todos passaram no teste" : "todos precisam estar habilitados";
    console.log(mensagem)
  }

habilitados(usuários)