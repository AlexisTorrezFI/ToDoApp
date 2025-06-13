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

app.get('/api/pokemon/ditto',async (req,res)=>{
  try{
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
    const respuesta = await fetch(url);
    if(!respuesta.ok){
      throw new Error('Error en la respuesta de la api');
    }
    const datos = await respuesta.json();
    res.json(datos);

    res.json()
  }catch(error){
    res.status(500).json({error : 'Error al consultar api pokemon fitto'});
  }


});

app.post('/api/usuarios', (req, res) => {
  const nuevoUsuario = req.body;
  // Aquí normalmente lo guardarías en la base de datos
  res.status(201).json(nuevoUsuario);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
