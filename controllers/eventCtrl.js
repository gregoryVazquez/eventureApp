const User = require('../models/user');
const Event = require('../models/event');
const Reminder = require('../models/remider');
const Votes = require('../models/rankedVotes');

exports.createEvent = async (req, res) => {
    if (req.body.eventCreator === undefined || req.body.creatorEmail === undefined || req.body.eventName === undefined ||
        req.body.endDate === undefined || req.body.itemList === undefined || req.body.ordinalSelected === undefined ||
        req.body.highMediumLowSelected === undefined || req.body.description === undefined || req.body.guestList === undefined) {
        return res.status(200).json({error: 'One or more fields were left empty'});
    }

    if (req.body.eventCreator === '' || req.body.creatorEmail === '' || req.body.eventName === '' ||
        req.body.endDate === '' || req.body.itemList === '' || req.body.ordinalSelected === '' ||
        req.body.highMediumLowSelected === '' || req.body.description === '' || req.body.guestList === '') {
        return res.status(200).json({error: 'One or more fields were left empty'});
    }

    
    const newEvent = new Event();
    newEvent.eventCreator = req.body.eventCreator;
    newEvent.creatorEmail = req.creatorEmail;
    newEvent.eventName = req.body.eventName;
    newEvent.endDate = req.body.endDate;
    newEvent.itemList = req.body.itemList;
    newEvent.ordinalSelected = req.body.ordinalSelected;
    newEvent.highMediumLowSelected = req.body.highMediumLowSelected;
    newEvent.description = req.body.description;
    newEvent.guestList = req.body.guestList;

    const event = await newEvent.save();
    return res.status(200).json({message: 'Event Created!'});
};


exports.voteEvent = async (req, res) => {
    if (req.body.votes.rankings === undefined || req.body.votes.rankings === null
        || req.body.votes.rankings === '') {
            return res.status(200).json({error: 'One or more fields were left empty'});
    }
    console.log("recv req!!!" + req.body);
    let title = req.body.eventTitle;
    console.log(title);
    let creator = req.body.eventCreator;
    console.log(creator);
    let voter = req.body.votes.voter;
    console.log(voter);
    let rankings = req.body.votes.rankings;
    
    const voted = await Event.update({$and:[{'eventCreator':creator}, {'eventName': title}]},
    {$addToSet:{'finishedVotes':{'voter': voter,'rankings': rankings}}});
    return res.status(200).json({message: "Thank you for your vote!"});
};

exports.searchReminders = async (req, res) => {
    const searchName = req.body.reminders;
    const regex = new RegExp(searchName, 'gi');
    const remindersSearched = 
        await Event.find({$or: [{'eventName': regex}, 
            {'eventCreator': regex}, 
            {'creatorEmail': regex}, 
            {'guestList': regex},
            {'description': regex}]});
    console.log(remindersSearched);

    if (remindersSearched.length > 0) {
        return res.status(200).json({message: "Search results", results: remindersSearched});
    } else {
        return res.status(200).json({message: "Search results", results: []});
    }
}

exports.sendReminders = async (req, res) => {
    if (req.body.remindersList === undefined || req.body.remindersList === null
        || req.body.remindersList === '' || req.body.remindersList.length < 1) {
            return res.status(200).json({error: 'No reminders were selected'});
    }
    console.log(req.body.remindersList);
    const remindersList = req.body.remindersList;
    remindersList.forEach(e => {
        console.log(e.name, e.reminder, e.creator);
        const remind = new Reminder();
        remind.name = e.name;
        remind.reminderTo = e.reminder;
        remind.reminderFrom = e.creator; 
        remind.save();
    });
    return res.status(200).json({message: "Reminders sent!"});
}

exports.getReminders = async (req, res) => {
    console.log(`recv reminder!`);
    console.log(req.params);
    if (req.params.email !== undefined) {
        const results = await Reminder.find({'reminderTo': req.params.email});
        console.log(results);
        return res.status(200).json({events: results});
    }
}

exports.getRankedVotes = async (req, res) => {
    console.log('getting votes');
    const email = req.body.email;
    const results = await Votes.find({'creatorEmail': email});
    return res.status(200).json({votes: results});
}