'use strict'

const mongoose = require('mongoose');
const config = require('./index');

module.exports.init = initMongoose;


function initMongoose(app) {
    mongoose.connect(config.mongodb.uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })

    // const db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', function() {
    //   // we're connected!
    //   console.log('connected')
    // });


    // If the Node process ends, cleanup existing connections
    process.on('SIGINT', cleanup)
    process.on('SIGTERM', cleanup)
    process.on('SIGHUP', cleanup)
}

function cleanup() {
    mongoose.connection.close(function() {
        process.exit();
    })
}
