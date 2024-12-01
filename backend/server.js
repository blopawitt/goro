const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Servir arquivos estáticos da pasta frontend/public
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Importar rotas
const drinksRoutes = require('./routes/drinks');

// Usar rotas
app.use('/api/drinks', drinksRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});