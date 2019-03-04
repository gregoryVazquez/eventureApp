const express = require('express');
const router = express.Router();
const VoteCtrl = require('../controllers/voteCtrl');

router.post('/votes', VoteCtrl.getRankedVotes);

module.exports = router;