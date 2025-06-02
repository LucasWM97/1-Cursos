const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
let adicionar;
let remover;
let posicao;

function agendarPaciente(arrayPacientes,nomePaciente) {
    remover =arrayPacientes.shift() 
    adicionar = arrayPacientes.push(nomePaciente)
    console.log(arrayPacientes)
}

function atenderPaciente(arrayPacientes,) {
    remover = arrayPacientes.shift();
    console.log(arrayPacientes)
}
function cancelarAtendimento(arrayPacientes,nomePaciente) {
    posicao = arrayPacientes.indexOf(nomePaciente);
    remover = arrayPacientes.splice(posicao,1)
    console.log(arrayPacientes)
}

agendarPaciente(pacientes,"José")//Coloca paciente ao Final da fila
atenderPaciente(pacientes)//Paciente é excluido da fila,por ser atendido
cancelarAtendimento(pacientes,"Maria")//Paciente sai da fila de atendimento, independente da posição que ele está
