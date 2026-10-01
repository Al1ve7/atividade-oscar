exports.register = (req, res) => {
  res.status(201).json({ message: 'Cliente VIP cadastrado com sucesso!' });
};

exports.login = (req, res) => {
  res.json({ token: 'jwt_token_fake_luxury', user: { id: 'u2', nome: 'Elena Rostova' } });
};

exports.getMe = (req, res) => {
  res.json(req.user);
};