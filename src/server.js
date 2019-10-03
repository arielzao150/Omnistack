// Importando o Express
const express = require('express');
const routes = require('./routes');

// Criando a aplicação
const app = express();

// Habilita o uso de JSON para as requisições
app.use(express.json());

// Utiliza as rotas do outro arquivo
app.use(routes);

// Define a porta por onde a aplicação será acessada
app.listen(3333);