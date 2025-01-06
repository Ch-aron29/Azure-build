const express = require('express');
const app = express();

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Aplicación desplegada en Azure con éxito!');
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
