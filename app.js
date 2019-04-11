// app.js

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const instructor = require('./routes/instructors');
const course = require('./routes/course');
const app = express();


// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://localhost:27017/howdy';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
    console.log('connected to db');
});


app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/instructor', instructor);
app.use('/course', course);

const port = 3001;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});