const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');

router.get('/cart/:userId', CartController.getCart);
router.post('/cart', CartController.createOrUpdateCart);
router.put('/cart/:userId', CartController.updateCart);
router.delete('/cart/item/:userId', CartController.deleteCartItem);
router.delete('/cart/:userId', CartController.clearCart);

module.exports = router;
