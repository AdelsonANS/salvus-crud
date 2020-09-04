const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Patient = require('../model/Patient');

const connection = new Sequelize(dbConfig);

Patient.init(connection);

module.exports = connection;