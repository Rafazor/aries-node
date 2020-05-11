'use strict'
const express = require('express');
const app = express();
const currentDate = require('./config/helpers/date');

const config = require('./config');

app.use(function (req, res, next) {
    console.log(`Middle 1 ${currentDate.formattedDate()}`);
    next();
});

require('./config/express').init(app);
require('./config/routes').init(app);
require('./config/mongoose').init(app);

app.use(function(err, req, res, next) {
    console.log('err', err);
    return res.status(400).json({
        status: 'error',
        message: 'There was an error!',
    });
})

app.listen(config.PORT, function () {
    console.log(`API on port ${config.PORT}`);
});
