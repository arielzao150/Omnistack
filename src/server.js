// Importando o Express
const express = require('express');

// Criando a aplicação
const app = express();

// Define as rotas
// GET, POST, PUT, DELETE

app.get('/', (req, res) => { // request e response
    return res.json({ message: "Hello World" }); // Objeto JSON
});

app.post('/users', (req, res) => {
    return res.json({ message: "top" });
});

app.get('/users', (req, res) => {
    return res.json({ idade: req.query.idade });
});

// Define a porta por onde a aplicação será acessada
app.listen(3333);