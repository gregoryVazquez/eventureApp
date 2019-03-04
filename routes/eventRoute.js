const express = require('express');
const router = express.Router();
const EventCtrl = require('../controllers/eventCtrl');


router.post('/event/create', EventCtrl.createEvent);
router.post('/event/vote', EventCtrl.voteEvent);
router.post('/event/reminders', EventCtrl.searchReminders);
router.post('/event/send-reminders', EventCtrl.sendReminders);
router.get('/event/get-reminders/:email', EventCtrl.getReminders);

router.post('/event/ranks', EventCtrl.getRankedVotes)

module.exports = router;