const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const objExerciseSchema = new Schema({
    language: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    correctAnswer: {
        type: String,
        required: true,
    }
});

const ObjExercise = mongoose.model('ObjExercise', objExerciseSchema);
module.exports = ObjExercise;