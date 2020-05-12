'use strict'
const User = require('../models/users')

module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;

function getUsers(req, res, next) {
    User.find(function (err, docs) {
        return res.json({message: 'GET', users: docs});
    })
}

function getUserById(req, res, next) {
    User.findById(req.params.id, function (err, doc) {
        req.resources.userById = doc;
        next();
    });
}

function createUser(req, res, next) {
    const user = new User({name: req.body.name, email: req.body.email});

    user.save(function (err, result) {
        if (err) {
            return res.json(err);
        }
        return res.json(result);
    });
}

function updateUser(req, res, next) {
    User.findByIdAndUpdate(
        {_id: req.params.id},
        {name: req.body.name, email: req.body.email},
        function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    );
}

function deleteUser(req, res, next) {
    User.findOneAndDelete({'_id': req.params.id}, function (err, result) {
        return res.json({deletedUser: result});
    });
}
