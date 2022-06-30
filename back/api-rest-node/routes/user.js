'use strict'

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.save);
router.post('/login', userController.login);
router.get('/getUsers', userController.getUsers);

module.exports = router;