const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orders');

router.get('/', orderController.getAll);

router.get('/:id', orderController.getOrder);

router.post('/create', orderController.createOrder);


module.exports = router;