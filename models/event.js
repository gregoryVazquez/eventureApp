const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    eventCreator: {type: String},
    creatorEmail: {type: String},
    eventName: {type: String},
    endDate: {type: Date},
    inputAddItem: {type: String},
    itemList: {type: Array},
    ordinalSelected: {type: Boolean},
    highMediumLowSelected: {type: Boolean},
    description: {type: String},
    inputAddGuest: {type: String},
    guestList: {type: Array},
    finishedVotes: {type: Array}
});

module.exports = mongoose.model('Event', eventSchema);