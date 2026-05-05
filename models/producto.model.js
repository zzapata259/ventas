const db = require('../config/database');

// Crear producto (CREATE)
exports.create = async (nombre, precio, imagen) => {
  const query = `
    INSERT INTO productos (nombre, precio, imagen)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const result = await db.query(query, [nombre, precio, imagen]);
  return result.rows[0];
};

// Obtener todos (READ)
exports.getAll = async () => {
  const result = await db.query('SELECT * FROM productos');
  return result.rows;
};

// Obtener uno por ID (READ)
exports.getById = async (id) => {
  const query = 'SELECT * FROM productos WHERE id = $1';
  const result = await db.query(query, [id]);
  return result.rows[0];
};

// Actualizar producto (UPDATE)
exports.update = async (id, nombre, precio, imagen) => {
  const query = `
    UPDATE productos
    SET nombre = $1,
        precio = $2,
        imagen = $3
    WHERE id = $4
    RETURNING *;
  `;

  const result = await db.query(query, [nombre, precio, imagen, id]);
  return result.rows[0];
};

// Eliminar producto (DELETE)
exports.delete = async (id) => {
  const query = 'DELETE FROM productos WHERE id = $1 RETURNING *';
  const result = await db.query(query, [id]);
  return result.rows[0];
};