// Importando o Express
const express = require('express');

// Criando a aplicação
const app = express();

// Define as rotas
app.get('/', (req, res) => { // request e response
    return res.json('Hello world');
});

// Define a porta por onde a aplicação será acessada
app.listen(3333);