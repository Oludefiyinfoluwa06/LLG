const ObjExercise = require('../models/objExercise');

const allExercises = async (req, res) => {
    const exercises = await ObjExercise.find();

    if (!exercises) {
        return res.status(404).json({ 'error': 'No exercises found' });
    }

    return res.status(200).json({ 'exercises': exercises });
}

const createExercise = async (req, res) => {
    const { language, question, options, correctAnswer } = req.body;

    if (!language || !question || !options || !correctAnswer) {
        return res.status(400).json({ 'error': 'Input fields cannot be empty' });
    }

    if (options.length < 2) {
        return res.status(400).json({ 'error': 'You must have at least 2 options to be picked from' });
    }

    const exercise = await ObjExercise.create({ language, question, options, correctAnswer });

    if (!exercise) {
        return res.status(400).json({ 'error': 'An error occured, please try again later' });
    }

    return res.status(200).json({ 'message': 'Exercise created successfully' });
}

const exerciseDetail = async (req, res) => {
    const id = req.params.id;

    const exercise = await ObjExercise.findById(id);

    if (!exercise) {
        return res.status(404).json({ 'error': 'Exercise could not be found' });
    }

    return res.status(200).json({ 'exercise': exercise });
}

const updateExercise = async (req, res) => {
    const id = req.params.id;

    const { language, question, options, correctAnswer } = req.body;

    if (!language || !question || !options || !correctAnswer) {
        return res.status(400).json({ 'error': 'Input fields cannot be empty' });
    }

    const exercise = await ObjExercise.findByIdAndUpdate(id);

    if (!exercise) {
        return res.status(404).json({ 'error': 'Exercise could not be found and cannot be updated' });
    }

    return res.status(200).json({ 'message': 'Exercise updated successfully' });
}

const deleteExercise = async (req, res) => {
    const id = req.params.id;

    const exercise = await ObjExercise.findByIdAndDelete(id);

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
