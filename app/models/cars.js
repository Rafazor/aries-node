const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const carsSchema = new Schema({
    createdAt: Number,
    updatedAt: Number,
    model: {
        type: String,
        required: [true, 'model is required'],
        unique: true
    },
    user: {
        type: ObjectId,
        ref: 'user',
        required: true
    },
    year: {
        type: Number,
        required: [true, 'year is required'],
        unique: false
    }
}, {timestamps: {currentTime: () => new Date().getTime()}})

module.exports = mongoose.model('car', carsSchema, 'cars') 
