const db = require('../config/db');

exports.getAllProducts = (req, res) => {
  res.json(db.produtos);
};

exports.getCarouselProducts = (req, res) => {
  const destaques = db.produtos.filter(p => p.emDestaqueCarrossel);
  res.json(destaques);
};

exports.getProductById = (req, res) => {
  const produto = db.produtos.find(p => p.id === req.params.id);
  if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });
  res.json(produto);
};

exports.createProduct = (req, res) => {
  const newProduct = { id: `p${db.produtos.length + 1}`, ...req.body };
  db.produtos.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  res.json({ message: `Produto ${req.params.id} atualizado com sucesso!` });
};

exports.deleteProduct = (req, res) => {
  res.json({ message: `Produto ${req.params.id} removido com sucesso!` });
};