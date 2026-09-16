const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.redirect('/app');
});

app.get('/gaishe/:suna', (req, res) => {
  const sunanMutum = req.params.suna;
  res.json({ sakon: `Sannu ${sunanMutum}! Barka da zuwa!` });
});

app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend.html'));
});

app.listen(PORT, () => {
  console.log(`Server yana aiki a port ${PORT}`);
});
