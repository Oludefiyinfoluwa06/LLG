const { allExercises, createExercise, updateExercise, deleteExercise, exerciseDetail } = require('../controllers/objExerciseController');

const router = require('express').Router();

router.get('/all', allExercises);

router.post('/create', createExercise);

router.get('/detail/:id', exerciseDetail);

router.put('/update/:id', updateExercise);

router.delete('/delete/:id', deleteExercise);

module.exports = router;