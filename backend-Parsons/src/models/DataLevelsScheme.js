const mongoose = require('mongoose');

const DataLevels = new mongoose.Schema({
    user_id: String,
    level: Number,
    timeTaken: Number,
    errorsCount: Number,
    completedAt: { type: Date, default: Date.now },
    });

module.exports = mongoose.model('DataLevels', DataLevels);