const Course = require("../models/course");

const SECTIONS_EXIST = { sections: { $ne: {}, $exists: 1 } };
//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.course_details = function(req, res, next) {
  Course.findById(req.query.id, function(err, course) {
    if (err) return next(err);
    res.json(course);
  });
};

exports.course_departments = (req, res, next) => {
  Course.find(SECTIONS_EXIST)
    .then(courses => {
      res.json([...new Set(courses.map(c => c._id.split("_")[0]))]);
    })
    .catch(next);
};

exports.department_courses = (req, res, next) => {
  Course.find(
    {
      _id: new RegExp(req.query.id, "i"),
      ...SECTIONS_EXIST
    },
    "name sections description termCode"
  )
    .then(course => res.json(course))
    .catch(next);
};
