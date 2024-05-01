const express = require('express');
const router = express.Router();

const CategorieController = require('../controllers/CategorieController')


router.get('/categories', CategorieController.getAllCategories);

router.get('/categories/:categorieID', CategorieController.getCategorieById);

router.post('/categories', CategorieController.createCategorie);

router.put('/categories/:categorieID', CategorieController.updateCategorie);

router.delete('/categories/:categorieID', CategorieController.deleteCategorie);

module.exports = router;