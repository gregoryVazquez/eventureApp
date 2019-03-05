const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const passport = require('passport');
const helmet = require('helmet');
const compression = require('compression');
const crypto = require('crypto');

const app = express();

mongoose.Promise = global.Promise;
//use this connection for local connection
//mongoose.connect('mongodb://localhost/eventuredb');

app.use(cors());
app.use(helmet());
app.use(compression());

app.all('*', function(req, res, next) {
    var origin = req.get('origin'); 
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", 'GET', 'POST', 'DELETE', 'PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


mongoose.connect(process.env.MONGODB);



require('./passport/passport-local');


app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//use for heroku
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));


app.use(passport.initialize());
app.use(passport.session());

const user = require('./routes/userRoute');
const event = require('./routes/eventRoute');
const lesson = require('./routes/lessonRoute');
const file = require('./routes/fileRoute');

app.use('/api', user);
app.use('/api', event);
app.use('/api', lesson);
app.use('/api', file);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000");
});