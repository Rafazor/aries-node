'use strict'
const Cars = require('../models/cars')

module.exports.getCars = getCars;
module.exports.getCarById = getCarById;
module.exports.createCar = createCar;
module.exports.deleteCar = deleteCar;
module.exports.updateCar = updateCar;

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
    Cars.findById(req.params.id, function (err, doc) {
        return res.json({message: 'GET BY ID - ' + req.params.id, car: doc});
    });
}

function updateCar(req, res, next) {
    Cars.findByIdAndUpdate(
        {_id: req.params.id},
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
    Cars.findOneAndDelete({'_id': req.params.id}, function (err, result) {
        return res.json({deletedCar: result});
    });
}
