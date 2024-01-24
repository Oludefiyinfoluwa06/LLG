const TheoryExercise = require('../models/theoryExercise');

const allExercises = async (req, res) => {
    const exercises = await TheoryExercise.find();

    if (!exercises) {
        return res.status(404).json({ 'error': 'No exercises found' });
    }

    return res.status(200).json({ 'exercises': exercises });
}

const createExercise = async (req, res) => {
    const { language, question } = req.body;

    if (!language || !question) {
        return res.status(400).json({ 'error': 'Input fields cannot be empty' });
    }

    const exercise = await TheoryExercise.create({ language, question });

    if (!exercise) {
        return res.status(400).json({ 'error': 'An error occured, please try again later' });
    }

    return res.status(200).json({ 'message': 'Exercise created successfully' });
}

const exerciseDetail = async (req, res) => {
    const id = req.params.id;

    const exercise = await TheoryExercise.findById(id);

    if (!exercise) {
        return res.status(404).json({ 'error': 'Exercise could not be found' });
    }

    return res.status(200).json({ 'exercise': exercise });
}

const updateExercise = async (req, res) => {
    const id = req.params.id;

    const { language, question } = req.body;

    if (!language || !question) {
        return res.status(400).json({ 'error': 'Input fields cannot be empty' });
    }

    const exercise = await TheoryExercise.findByIdAndUpdate(id);

    if (!exercise) {
        return res.status(404).json({ 'error': 'Exercise could not be found and cannot be updated' });
    }

    return res.status(200).json({ 'message': 'Exercise updated successfully' });
}

const deleteExercise = async (req, res) => {
    const id = req.params.id;

    const exercise = await TheoryExercise.findByIdAndDelete(id);

    if (!exercise) {
        return res.status(404).json({ 'error': 'Exercise could not be found and cannot be deleted' });
    }

    return res.status(200).json({ 'message': 'Exercise deleted successfully' });
}

module.exports = {
    allExercises,
    createExercise,
    exerciseDetail,
    updateExercise,
    deleteExercise
}
