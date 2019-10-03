// Importando o Express
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Criando a aplicação
const app = express();

// Conectando ao MongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-zwfez.mongodb.net/admin?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Habilita o uso de JSON para as requisições
app.use(express.json());

// Utiliza as rotas do outro arquivo
app.use(routes);

// Define a porta por onde a aplicação será acessada
app.listen(3333);