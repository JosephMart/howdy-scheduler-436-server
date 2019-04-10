const Instructor = require('../models/instructors');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.instructor_details = function (req, res, next) {
    Instructor.findById(req.params.id, function (err, Instructor) {
        if (err) return next(err);
        res.send(Instructor);
    })
};