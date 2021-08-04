const express = require("express");
const app = express();
const port = 8000;
let countriesNames = [];

app.get("https://restcountries.eu/rest/v1/all",(req, res) =>{
   
    for(let i = 0; i < req.length; i++) {
        let name = req[i].name;
        countriesNames.push(name);
    }
    res.send(countriesNames);

})




app.listen(port, () => {
    console.log("server start ")
})




