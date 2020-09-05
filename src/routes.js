const express = require('express');
const PatientController = require('./controllers/PatientController');


const routes = express.Router();


routes.get('/api/patients', PatientController.index);
routes.get('/api/patients/:id', PatientController.show);

routes.post('/api/patients', PatientController.store);

routes.put('/api/patients/:id', PatientController.update);
routes.delete('/api/patients/:id', PatientController.destroy);


module.exports = routes;