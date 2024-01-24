const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const theoryExerciseSchema = new Schema({
    language: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
});

const TheoryExercise = mongoose.model('TheoryExercise', theoryExerciseSchema);
module.exports = TheoryExercise;