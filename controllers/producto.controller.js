const productoModel = require('../models/producto.model');

// POST (crear)
exports.crear = async (req, res) => {
  try {
    const { nombre, precio, imagen } = req.body;
    const producto = await productoModel.create(nombre, precio, imagen);
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET (todos)
exports.obtenerTodos = async (req, res) => {
  try {
    const productos = await productoModel.getAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET por ID
exports.obtenerPorId = async (req, res) => {
  try {
    const producto = await productoModel.getById(req.params.id);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT (actualizar)
exports.actualizar = async (req, res) => {
  try {
    const { nombre, precio, imagen } = req.body;

    const producto = await productoModel.update(
      req.params.id,
      nombre,
      precio,
      imagen
    );

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
exports.eliminar = async (req, res) => {
  try {
    const producto = await productoModel.delete(req.params.id);

    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ mensaje: 'Producto eliminado', producto });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};