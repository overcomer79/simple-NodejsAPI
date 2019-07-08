const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customers');

router.get('/', customerController.customers_get_all);
router.post('/', customerController.customers_add_customer);
router.get('/:id', customerController.customers_get_customer_by_id);

module.exports = router;