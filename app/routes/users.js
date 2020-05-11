'use strict'
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users')


router.get('/users', userCtrl.getUsers);

router.get('/user/:id', userCtrl.getUserById);

router.post('/user', userCtrl.createUser);

router.put('/user/:id', userCtrl.updateUser);

router.delete('/user/:id', userCtrl.deleteUser);

module.exports = router;
