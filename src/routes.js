const express = require('express');

const routes = express.Router();


routes.get('/api/patients',(req, res)=> {
    return res.json({mensage:"hello"})
    })


module.exports = routes;