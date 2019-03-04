const Lesson = require('../models/lesson');

exports.createLesson = async (req, res) => {
    if (req.body.email === undefined || req.body.creator === undefined ||
        req.body.title === undefined || req.body.description === undefined ||
        req.body.lesson === undefined ) {
        return res.status(200).json({error: 'One or more fields were left empty'});
    }
    if (req.body.email === '' || req.body.creator === '' ||
        req.body.title === '' || req.body.description === '' ||
        req.body.lesson === '' ) {
        return res.status(200).json({error: 'One or more fields were left empty'});
    }
    console.log(`${req.body.title} added to database`);
    const lesson = new Lesson();
    lesson.creator = req.body.creator;
    lesson.email = req.body.email;
    lesson.title = req.body.title;
    lesson.description = req.body.description;
    lesson.lesson = req.body.lesson
    lesson.contributions = req.body.contributions;
    lesson.contributors = req.body.contributors;
    lesson.isPrivate = req.body.isPrivate;
    lesson.date = req.body.date;

    const savedLesson = await lesson.save();
    return res.status(200).json({message: "lesson created!"});
}

exports.searchLesson = async (req, res) => {
    const searchName = req.body.lesson;
    const regex = new RegExp(searchName, 'gi');
    const lessonsSearched = 
        await Lesson.find({$or: [{'title': regex}, 
            {'description': regex}, 
            {'lesson': regex}, 
            {'creator': regex},
            {'email': regex}]});
    console.log(lessonsSearched);

    if (lessonsSearched.length > 0) {
        return res.status(200).json({message: "Search results", results: lessonsSearched});
    } else {
        return res.status(200).json({message: "Search results", results: []});
    }
}

exports.contributeLesson  = async (req, res) => {
    if (req.body.contribution === '' || req.body.contribution === undefined || req.body.contribution === null) {
        return res.status(200).json({error: "Contribution field left empty!"})
    }
    const creator = req.body.creator;
    const email = req.body.email;
    const title = req.body.title;
    const contributor = req.body.contributor;
    const contribution = req.body.contribution;
    const date = req.body.date;
    console.log('recv request');
    const contributedLesson = await Lesson.update({$and:[{'creator':creator},{'email':email}, {'title':title}]}, 
        {$addToSet:{'contributions':{'name':contributor, 'advice': contribution,'date': date}}})
    console.log(req.body);
    return res.status(200).json({message: "Debug contribution", results: contribution});
}