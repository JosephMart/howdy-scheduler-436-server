const express = require('express');
const router = express.Router();

const instructor_controller = require('../controllers/instructors');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', instructor_controller.test);

router.get('/:id', instructor_controller.instructor_details);

module.exports = router;