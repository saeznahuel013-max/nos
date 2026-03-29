const express = require('express');
const app = express();
const port = process.env.PORT || 80;

// Esto engaña al FIFA para que crea que los servidores están activos
app.get('*', (req, res) => {
  console.log("FIFA preguntando por disponibilidad...");
  // Estas son las respuestas que el juego busca para dejarte pasar
  res.send('AVAILABLE=1\nMAINTENANCE=0\nIS_ONLINE=1');
});

app.post('*', (req, res) => {
  console.log("FIFA intentando loguear...");
  res.send('SUCCESS=1');
});

app.listen(port, () => {
  console.log(`Servidor Redirector FIFA activo en puerto ${port}`);
});
