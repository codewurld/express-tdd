const mongoose = require('mongoose');

const CitiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add city name'],
        trim: true,
    },
    visited: {
        type: Boolean,
        required: true,
    },
    noOfVisits: {
        type: Number,
        required: [true, 'Please add a number or zero if never visited']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('new-practice', CitiesSchema);