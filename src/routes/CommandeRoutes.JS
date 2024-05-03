const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commandeController');

router.post('/commandes', commandeController.createCommande);
router.get('/commandes', commandeController.getAllCommandes);
router.get('/commandes/:id', commandeController.getCommandeById);
router.patch('/commandes/:id', commandeController.updateCommande);
router.delete('/commandes/:id', commandeController.deleteCommande);

module.exports = router;
