const express = require('express');
const bodyParser = require('body-parser');

// Importing routing settings
const customersRoutes = require('./api/routes/customers');

// Express app initialization
const app = express();

// Middleware configuration
app.use(bodyParser.json());
app.use('/customers', customersRoutes);

module.exports = app;