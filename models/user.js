const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

const userSchema = mongoose.Schema({
    fullname: {type: String},
    email: {type: String},
    password: {type: String}
});

userSchema.method('encryptPassword', function(password) {
    var hash = crypto.createHash("sha512").update(password, 'utf-8').digest('hex');
    return hash;
}); 


//function(password) {
//    return bcrypt.hashSync(password, bcrypt.genSalt(10), null);
//});

userSchema.method('checkPassword', function(password) {
    var hash = crypto.createHash("sha512").update(password, 'utf-8').digest('hex');
    return hash;
});

module.exports = mongoose.model('User', userSchema);