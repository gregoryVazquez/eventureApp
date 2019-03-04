const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    User.findOne({'email': email}, (err, user) => {
        if (err) {
            return done(err);
        }

        if (user) {
            return done(null, false, 'User email already exists');
        }

        if (req.body.password.length < 5) {
            return done(null, false, 'Password must be at least 5 characters long');
        }

        const newUser = new User();
        newUser.fullname = req.body.fullname;
        newUser.email = req.body.email;
        newUser.password = newUser.encryptPassword(req.body.password);

        console.log(`${newUser.fullname} ${newUser.email} ${newUser.password} added to database`);
        
        newUser.save((err) => {
            return done(null, newUser);
        });
    });
}));

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    User.findOne({'email': email}, (err, user) => {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false, 'User does not exist');
        }

        if (password.length < 5) {
            return(null, false, 'Password is less that 5 characters')
        }

        if (user.password !== user.checkPassword(req.body.password)) {
            return done(null, false, 'Password is incorrect');
        }

        return done(null, user); 
    });
}));