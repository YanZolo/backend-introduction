const express = require('express');
const app = express();

const port = 8000;


// app.get('/hello', (req, res) => {
//     res.send('Hello world!');
// });

app.get('/hola', (req, res) => {
    res.send('Hola todos !');
});










app.listen(port, ()  => {
    console.log(`server activated at port ${port}`)
})
