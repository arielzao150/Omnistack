const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const BookingController = require('./controllers/BookingController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();
const upload = multer(uploadConfig);

// Define as rotas
// GET, POST, PUT, DELETE

routes.get('/', (req, res) => { // request e response
    return res.json({ message: "Hello World" }); // Objeto JSON
});

// req.query = acessar query params (para filtros)
routes.get('/users', (req, res) => {
    return res.json({ idade: req.query.idade });
});

// req.params = acessar route params (para edição e delete)
routes.put('/users/:id', (req, res) => {
    return res.json({ id: req.params.id });
});

// req.body = acessar corpo da requisição (para criação e edição)
routes.post('/users', (req, res) => {
    return res.json(req.body);
});

routes.post('/test-route', (req, res) => {
    return res.json(req.body);
});

// Redireciona para a Controller
routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:id/bookings', BookingController.store);

routes.get('/dashboard', DashboardController.show);

module.exports = routes;