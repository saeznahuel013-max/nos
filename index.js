const express = require('express');
const app = express();
const port = process.env.PORT || 80;

// Esto le dice al FIFA que el servidor está OK
app.get('*', (req, res) => {
  console.log("FIFA intentando conectar...");
  res.send('EA_GATEWAY_OK');
});

app.listen(port, () => {
  console.log(`Servidor de FIFA corriendo en puerto ${port}`);
});
