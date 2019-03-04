const mongoose = require('mongoose');

const rankedVotesPickOne = mongoose.Schema({
    title: {type: String},
    creatorEmail: {type: String},
    rankedVotes: {type: Array}
})


const rankedVotesOrdinal = mongoose.Schema({
    creator: {type: String},
    finalTally: {type: Array}
})

module.exports = mongoose.model('RankedVotesPickOne',  rankedVotesPickOne);
module.exports = mongoose.model('RankedVotesOrdinal', rankedVotesOrdinal);