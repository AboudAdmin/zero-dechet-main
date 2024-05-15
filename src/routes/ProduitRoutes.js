

const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produitController');

router.post('/produits', produitController.createProduit);
router.get('/produits', produitController.getAllProduits);

router.get('/produits/:id', produitController.getProduitById);
router.put('/produits/:id', produitController.updateProduit);
router.delete('/produits/:id', produitController.deleteProduit);

module.exports = router;
