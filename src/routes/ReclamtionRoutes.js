const express = require('express');
const router = express.Router();
const reclamationController = require('../controllers/reclamationController');


router.post('/reclamations', reclamationController.createReclamation);

router.get('/reclamations', reclamationController.getAllReclamations);

router.get('/reclamations/:id', reclamationController.getReclamationById);

router.patch('/reclamations/:id', reclamationController.updateReclamation);

router.delete('/reclamations/:id', reclamationController.deleteReclamation);

module.exports = router;
