const alunos = require ("../dados/alunos");
const express = require("express");

function obterAlunos (req,res) {
return res.status(200).json(alunos)
}


function obterAluno(req,res) {
  const {id} = req.params;
  const alunoObtido = alunos.find(aluno => aluno.id == id);
 
if(!alunoObtido){
return res.status(400).json({mensagem:"O ID deve ser um numero valido"})
}
if(!alunoObtido.nome){
  return res.status(404).json({mensagem:"Aluno nao foi encontrado"})
}
res.send(alunoObtido)


  
}

function criarAluno(req,res) {
  
const {nome,sobrenome,idade,curso} = req.body
let newId = alunos.length + 1 ;



if(!nome){
  return res.status(400).json({mensagem:"O nome deve ser informado"})
}
if(!sobrenome){
  return res.status(400).json({mensagem:"O nome sobrenome ser informado"})
}
if(!idade){
  return res.status(400).json({mensagem:"A idade deve ser informado"})
}
if(idade<18){
  return res.status(400).json({mensagem:"A idade do aluno deve  ser  maior que 18"})
}

if(!curso){
  return res.status(400).json({mensagem:"O curso deve ser informado"})
}

const novoAluno = {
  id:newId,
  nome,
  sobrenome,
  idade,
  curso
}

  alunos.push(novoAluno);

  return res.status(201).send();
}

function deletarAlunos(req,res) {

const {id} = req.params;

if(isNaN(id)){
  return res.status(400).json({mensagem:"Digite um numero valido"})
}

const alunoProcurado = alunos.find(aluno =>  aluno.id == id);

if(!alunoProcurado){
  return res.status(404).json({mensagem:"Aluno a ser excluido nao foi encontrado"})
}


const alunoDeletado = alunos.splice(Number(id)-1,1);


return res.status(200).send();


  
}



module.exports = {

  obterAlunos,
  obterAluno,
  criarAluno,
  deletarAlunos
}