const db = require('../config/db');

exports.getCategories = (req, res) => {
  res.json(db.categorias);
};

exports.createCategory = (req, res) => {
  const { nome } = req.body;
  const newCategory = { id: `c${db.categorias.length + 1}`, nome };
  db.categorias.push(newCategory);
  res.status(201).json(newCategory);
};