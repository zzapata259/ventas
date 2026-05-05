const express = require('express');
const router = express.Router();

const productoController = require('../controllers/producto.controller');

router.post('/', productoController.crear);
router.get('/', productoController.obtenerTodos);
router.get('/:id', productoController.obtenerPorId);
router.put('/:id', productoController.actualizar);
router.delete('/:id', productoController.eliminar);

module.exports = router;