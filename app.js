const express = require('express');
const app = express();

const bodyParser = require('body-parser');

/**
 * ROUTING SETTINGS
 */
const customersRoutes = require('./api/routes/customers');

/**
 * MIDDLEWARES
 */
app.use(bodyParser.json());
app.use('/customers', customersRoutes);

module.exports = app;