const express = require('express');
const app = express();

// Ruta para Health Check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Puerto proporcionado por Azure
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
