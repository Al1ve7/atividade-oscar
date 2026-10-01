const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const wishlistRoutes = require('./routes/wishlistRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Servir a pasta raiz e a pasta de imagens estáticas
app.use(express.static(path.join(__dirname, '../')));
app.use('/img', express.static(path.join(__dirname, '../img')));

// Rotas da API
app.use('/api/auth', authRoutes);
app.use('/api/categorias', categoryRoutes);
app.use('/api/produtos', productRoutes);
app.use('/api/wishlist', wishlistRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = app;