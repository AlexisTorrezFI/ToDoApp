const express = require('express');
const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola mundo desde la API!');
});

// Ruta de ejemplo tipo REST
app.get('/api/usuarios', (req, res) => {
  res.json([
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Luis' }
  ]);
});

app.post('/api/usuarios', (req, res) => {
  const nuevoUsuario = req.body;
  // Aquí normalmente lo guardarías en la base de datos
  res.status(201).json(nuevoUsuario);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
