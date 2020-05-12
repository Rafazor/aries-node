'use strict'
const Cars = require('../models/cars')

module.exports.getCars = getCars;
module.exports.getCarById = getCarById;
module.exports.createCar = createCar;
module.exports.deleteCar = deleteCar;
module.exports.updateCar = updateCar;
module.exports.getUserAndCarById = getUserAndCarById;

function getCars(req, res, next) {
    Cars
        .find()
        .populate('user', 'name')
        .exec(function (err, result) {
            if (err) {
                return next(err);
            }

            return res.json({data: result})
        })
}

function createCar(req, res, next) {
    const car = new Cars({model: req.body.model, year: req.body.year, user: req.body.user});

    car.save(function (err, result) {
        if (err) {
            return res.json(err);
        }
        return res.json(result);
    });
}

function getCarById(req, res, next) {
    Cars.findById(req.params.carId, function (err, doc) {
        req.resources.carById = doc;
        next();
    });
}

function updateCar(req, res, next) {
    Cars.findByIdAndUpdate(
        {_id: req.params.carId},
        {model: req.body.model, year: req.body.year},
        function (err, result) {
            if (err) {
                return res.json(err);
            }

            return res.json({'updatedCar': result});
        }
    );
}

function deleteCar(req, res, next) {
    Cars.findOneAndDelete({'_id': req.params.carId}, function (err, result) {
        return res.json({deletedCar: result});
    });
}

function getUserAndCarById(req, res, next) {
    req.resources.userAndCarById = [req.resources.userById, req.resources.carById];
    next();
}
