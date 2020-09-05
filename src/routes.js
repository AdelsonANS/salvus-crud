const express = require('express');
const UserController = require('./controllers/PatientController');


const routes = express.Router();


routes.get('/api/patients', UserController.index);
routes.get('/api/patients/:id', UserController.show);

routes.post('/api/patients', UserController.store);

routes.put('/api/patients/:id', UserController.update);
routes.delete('/api/patients/:id', UserController.destroy);


module.exports = routes;