const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orders');

router.get('/', orderController.getAll);

router.get('/:id', orderController.getOrder);

router.post('/', orderController.createOrder);

// router.put('/:id', userController.updateCommand);

// router.delete('/:id', userController.deleteCommand);

module.exports = router;