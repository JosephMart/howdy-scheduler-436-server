const express = require('express');
const router = express.Router();

const course_controller = require('../controllers/course');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', course_controller.test);

// curl "localhost:3001/course?id=ACCT_209_201931"
router.get('/', course_controller.course_details);

router.get('/departments', course_controller.course_departments);

// curl "localhost:3001/course/department?id=CSCE"
router.get('/department', course_controller.department_courses);

module.exports = router;