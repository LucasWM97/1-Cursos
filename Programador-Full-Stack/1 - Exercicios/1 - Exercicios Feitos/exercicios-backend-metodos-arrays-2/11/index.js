const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
  ];
  function comecaComA(array) {
    const letraA = array.filter(function (nome){
        return nome[0] == "a" || nome[0] == "A"
    })
    console.log(letraA);
  }

  comecaComA(nomes)