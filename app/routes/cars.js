'use strict';
const express = require('express');
const router = express.Router();
const carsCtrl = require('../controllers/cars')
const userCtrl = require('../controllers/users');
const commonCtrl = require('../controllers/common');


router.get('/cars', carsCtrl.getCars);

router.get('/car/:carId', carsCtrl.getCarById);

router.post('/car', carsCtrl.createCar);

router.delete('/car/:carId', carsCtrl.deleteCar);

router.put('/car/:carId', carsCtrl.updateCar);

router.get('/car/:id/:carId',
    userCtrl.getUserById,
    carsCtrl.getCarById,
    carsCtrl.getUserAndCarById,
    commonCtrl.responseToJSON('userAndCarById')
);

module.exports = router;
