const Course = require('../models/course');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.course_details = function (req, res, next) {
    Course.findById(req.query.id, function (err, course) {
        if (err) return next(err);
        res.json(course);
    })
};

exports.course_departments = (req, res, next) => {
    Course.find({}, '_id, name').then(courses => {
        res.json({
            departments: [...new Set(courses.map(c => (c._id.split('_')[0])))]
        });
    }).catch(next);
};

exports.department_courses = (req, res, next) => {
    Course.find({
        _id: new RegExp(req.query.id, 'i')
    }).then(course =>
        res.json(course)
    ).catch(next);
}