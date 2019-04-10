const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    _id: {
        type: String
    },
    credits: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    campus: {
        type: String
    },
    divisionOfHours: {
        type: String
    },
    termCode: {
        type: Number
    },
    sections: {
        type: Object
    }
});


// Export the model
module.exports = mongoose.model('courses', CourseSchema);