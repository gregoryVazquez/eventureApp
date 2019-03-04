const mongoose = require('mongoose');

const reminderSchema = mongoose.Schema({
    name: {type: String},
    reminderTo: {type: String},
    reminderFrom: {type: String}
});

module.exports = mongoose.model('Reminder', reminderSchema);