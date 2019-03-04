const express = require('express');
const router = express.Router();
const LessonCtrl = require('../controllers/lessonCtrl');

router.post('/lesson/create', LessonCtrl.createLesson);
router.post('/lesson/search-lesson', LessonCtrl.searchLesson);
router.post('/lesson/contribute', LessonCtrl.contributeLesson);

module.exports = router;