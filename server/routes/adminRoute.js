const { register, login, adminProfile } = require('../controllers/adminController');
const { protectAdminRoute } = require('../middlewares/authMiddleware');

const router = require('express').Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protectAdminRoute, adminProfile);

module.exports = router;