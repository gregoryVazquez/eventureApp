const passport = require('passport');
const User = require('../models/user');
const Event = require('../models/event');

//creates user
exports.createUser = (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
        if (err) {
            return res.status(200).json({error: err});
        }

        if (info) {
            return res.status(200).json({error: info});
        }

        return res.status(201).json({message: 'User created', user: user});
    })(req, res, next);
}

//for login
exports.loginUser = (req, res, next) => {
    passport.authenticate('local-login', (err, user, info) => {
        if (req.body.email === undefined || req.body.password === undefined) {
            return res.status(200).json({error: 'One or more fields were left empty'});
        }
        
        if (req.body.email === '' || req.body.password === '') {
            return res.status(200).json({error: 'One or more fields were left empty'});
        }

        if (err) {
            return res.status(200).json({error: err});
        }

        if (info) {
            return res.status(200).json({error: info});
        }

        return res.status(201).json({message: 'Login Successful', user: user});
    })(req, res, next);
}


exports.getOpenEvents = async (req, res) => {
    console.log(`debug ${req.params.email}`);
    if (req.params.email !== undefined) {
        const results = await Event.find({'guestList': { '$in': [req.params.email]}});
        console.log(results);
        return res.status(200).json({events: results});
    }
}