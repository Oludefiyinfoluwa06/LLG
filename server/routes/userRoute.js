const { register, login, userProfile } = require('../controllers/userController');
const { protectUserRoute } = require('../middlewares/authMiddleware');

const router = require('express').Router();


router.post('/register', register);
router.post('/login', login);
router.get('/me', protectUserRoute, userProfile);

module.exports = router;