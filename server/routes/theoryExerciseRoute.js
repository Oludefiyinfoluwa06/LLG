const { allExercises, createExercise, exerciseDetail, updateExercise, deleteExercise } = require('../controllers/theoryExerciseController');

const router = require('express').Router();

router.get('/all', allExercises);

router.post('/create', createExercise);

router.get('/detail/:id', exerciseDetail);

router.put('/update/:id', updateExercise);

router.delete('/delete/:id', deleteExercise);

module.exports = router;