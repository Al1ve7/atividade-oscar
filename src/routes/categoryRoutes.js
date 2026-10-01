const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', categoryController.getCategories);
router.post('/', authMiddleware, categoryController.createCategory);

module.exports = router;