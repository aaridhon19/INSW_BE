const express = require('express');
const PungutanController = require('../controllers/pungutanController');

const router = express.Router();

router.post('/dataPungutan', PungutanController.createPungutan);
router.get('/dataPungutan', PungutanController.getPungutan);
router.get('/dataPungutan/:id', PungutanController.getPungutanById);
router.put('/dataPungutan/:id', PungutanController.updatePungutan);
router.delete('/dataPungutan/:id', PungutanController.deletePungutan);

module.exports = router;
