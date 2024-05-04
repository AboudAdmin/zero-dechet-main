const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.post('/messages', messageController.createMessage);

router.get('/messages', messageController.getAllMessages);

router.get('/messages/:id', messageController.getMessageById);

router.patch('/messages/:id', messageController.updateMessage);
router.delete('/messages/:id', messageController.deleteMessage);

module.exports = router;

