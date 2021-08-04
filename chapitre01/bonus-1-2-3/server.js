// const dataCountries = require("./dataCountries")
// const dataPokemons = require("./dataPokemons");
const {dataCountries,dataPokemons} = require("./globalDatabase");


const express = require("express");
const app = express();
const port = 8000;
let countriesNames = [];
let pokemonsName = "";


app.get("/countries", (req, res) => {    

    for (let i = 0; i < dataCountries.length; i++) {
        countriesNames.push(dataCountries[i].name);
    }
    res.send(countriesNames);
})

app.get("/pokemons/:id", (req, res) => {    
        pokemonsName = dataPokemons[req.params.id-1].name;    
    res.send(pokemonsName);
})



app.listen(port, () => {
    console.log("server start ")
})




