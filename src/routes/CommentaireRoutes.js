

const express = require('express');
const router = express.Router();
const commentaireController = require('../controllers/commentaireController');

router.post('/commentaires', commentaireController.createCommentaire);
router.get('/commentaires', commentaireController.getAllCommentaires);
router.get('/commentaires/:id', commentaireController.getCommentaireById);
router.patch('/commentaires/:id', commentaireController.updateCommentaire);
router.delete('/commentaires/:id', commentaireController.deleteCommentaire);

module.exports = router;
