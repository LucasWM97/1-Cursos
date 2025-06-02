const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
let excluindoPaciente;
let adicionandoAoFinal;

function filaDeAtendimento(listaDePacientes,tipoDeOperacao,nomePaciente) {
    if(tipoDeOperacao == "agendar"){
    excluindoPaciente = listaDePacientes.shift()
    adicionandoAoFinal = listaDePacientes.push(nomePaciente)
    console.log(listaDePacientes)
    }else if (tipoDeOperacao == "atender"){
    excluindoPaciente = listaDePacientes.shift()
        console.log(listaDePacientes)
    }    
    
}

filaDeAtendimento(pacientes,"agendar","José")
filaDeAtendimento(pacientes,"atender","Pedro")
filaDeAtendimento(pacientes,"atender","Maria")

