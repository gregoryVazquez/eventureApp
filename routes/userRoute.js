const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/userCtrl');

router.get('/events/view/:email', UserCtrl.getOpenEvents);

router.post('/signup/user', UserCtrl.createUser);
router.post('/login/user', UserCtrl.loginUser);


module.exports = router;