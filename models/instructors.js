const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String
    },
    distributionData: {
        type: Object
    },
    courseNames: {
        type: Array
    }
});


// Export the model
module.exports = mongoose.model('instructors', InstructorSchema);