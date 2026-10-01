module.exports = (req, res, next) => {
  // Simulação de middleware de autenticação
  req.user = { id: 'u2', nome: 'Elena Rostova', email: 'cliente.vip@luxury.com' };
  next();
};