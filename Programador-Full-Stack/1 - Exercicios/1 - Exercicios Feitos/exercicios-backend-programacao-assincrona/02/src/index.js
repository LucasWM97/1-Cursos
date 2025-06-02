const express = require("express");
const app = express();
const {listarPokemons,detalharPokemon} = require("utils-playground")


app.get("/pokemon",async function (req,res) {
const pokemons = await listarPokemons();
res.json(pokemons)
  
})

app.get("/pokemon/:idPokemon",async function (req,res) {
  const {idPokemon} = req.params;
  const pokemons = await detalharPokemon(idPokemon)
  const {id,name,height,weight,base_experience,forms,abilities,species} = pokemons
  const newPokemon = [{
    id,
    name,
    height,
    weight,
    base_experience,
    forms,
    abilities,
    species

  }]


res.json(newPokemon)

})



app.listen(8000);