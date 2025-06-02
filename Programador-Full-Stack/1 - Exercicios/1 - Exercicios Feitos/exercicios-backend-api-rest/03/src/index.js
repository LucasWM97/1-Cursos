const express = require("express");
const app = express();
let livros = [
  {
      id: 1,
      titulo: "A Odisséia de Jonas",
      autor: "Thomas Crawling",
      ano: 2001,
      numPaginas: 197,
  },
  {
      id: 2,
      titulo: "Jonas e a sociedade escondida",
      autor: "Claire Crawling",
      ano: 2004,
      numPaginas: 158,
  },
]

app.use(express.json());


app.get("/livros",function (req,res) {

  return res.json(livros)
  
})

app.get("/livros/:id",function (req,res) {
  const {id} = req.params
  const idAchado = livros.find(livro => livro.id == id);

  if(isNaN(id)){
    return res.json({
      "mensagem": "O valor do parâmetro ID da URL não é um número válido."
    })
  }
  if(!idAchado){
    return res.json({
      "mensagem": "Não existe livro para o ID informado."
    })
  }

  res.json(idAchado);
  
  
})

app.post("/livros",function (req,res) {
  let idAutomatico = livros.length + 1;

  const {titulo,autor,ano,numPaginas} = req.body;


  const newBook = {
      id: idAutomatico,
      titulo,
      autor,
      ano,
      numPaginas,
  }
livros.push(newBook);

res.json({mensagem:"Livro adicionado"})

  
})

app.put("/livros/:id", function (req,res) {
  const {id} = req.params;
  const {titulo,autor,ano,numPaginas} = req.body;
  const achandoLivro = livros.find(livro => livro.id == id);

  if(!achandoLivro){
    return res.status(404).json({mensagem:"Não existe livro a ser substituido para o ID informado."})
  }


  let livro = livros.find(l => l.id == id);
  livro.titulo = titulo;
  livro.autor = autor;
  livro.ano = ano;
  livro.numPaginas = numPaginas;

  res.json({
    "mensagem": "Livro substituído."
  })
})

app.patch("/livros/:id",function (req,res) {
  const {id} = req.params;
  const procurandoId = livros.find(livro=> livro.id == id);
  const {titulo,autor,ano,numPaginas} = req.body

  if(!procurandoId){
    res.status(404).json({
      "mensagem": "Não existe livro a ser alterado para o ID informado."
    })
  }

  if(procurandoId && titulo){
    procurandoId.titulo = titulo;
    return res.json({"mensagem": "Livro substituído."});
  }
  if(procurandoId && autor){
    procurandoId.autor = autor;
    return res.json({"mensagem": "Livro substituído."});
  }
  if(procurandoId && ano){
    procurandoId.ano = ano;
    return res.json({"mensagem": "Livro substituído."});
  }
  if(procurandoId && numPaginas){
    procurandoId.numPaginas = numPaginas;
    return res.json({"mensagem": "Livro substituído."});
  }

})

app.delete("/livros/:id",function (req,res) {
  const {id} = req.params;

  const livroDeletar = livros.findIndex(function (livro) {
    return livro.id == id
  })

  if(livroDeletar == -1){
  return res.json({"mensagem": "Não existe livro a ser removido para o ID informado."})
  }

  livros.splice(livroDeletar,1);
  res.json({"mensagem": "Livro removido."});

  
})


app.listen(3000);