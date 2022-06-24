const express = require('express');
// const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

router.use('/orders', require('./orders'));
router.use('/users', require('./users'));

module.exports = router;