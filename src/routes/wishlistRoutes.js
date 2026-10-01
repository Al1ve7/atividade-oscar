const router = require('express').Router();
const wishlistController = require('../controllers/wishlistController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, wishlistController.getWishlist);
router.post('/toggle', authMiddleware, wishlistController.toggleWishlist);
router.delete('/:produtoId', authMiddleware, wishlistController.removeFromWishlist);

module.exports = router;