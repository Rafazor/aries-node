'use strict'
const express = require('express');
const router = express.Router();
const carsCtrl = require('../controllers/cars')


router.get('/cars', carsCtrl.getCars);

router.get('/car/:id', carsCtrl.getCarById);

router.post('/car', carsCtrl.createCar);

router.delete('/car/:id', carsCtrl.deleteCar);

router.put('/car/:id', carsCtrl.updateCar);

module.exports = router;
