const express = require('express');
const cors = require('cors');

require('dotenv').config();

require('./config/database'); // conexión a postgres

const app = express();

app.use(cors());
app.use(express.json());

// 👇 Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// 👇 Importar rutas
const productoRoutes = require('./routes/producto.routes');

// 👇 Usar rutas
app.use('/productos', productoRoutes);

// Puerto dinámico (IMPORTANTE para Render)
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});