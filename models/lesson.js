const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
    creator: {type: String},
    email: {type: String},
    title: {type: String},
    description: {type: String},
    lesson: {type: String},
    contributions: {type: Array},
    contributors: {type: Array},
    isPrivate: {type: Boolean},
    date: {type: Date}
}); 

module.exports = mongoose.model('Lesson', lessonSchema);