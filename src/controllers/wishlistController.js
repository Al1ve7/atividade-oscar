const db = require('../config/db');

exports.getWishlist = (req, res) => {
  const favoritos = db.produtos.filter(p => db.wishlist.includes(p.id));
  res.json(favoritos);
};

exports.toggleWishlist = (req, res) => {
  const { productId } = req.body;
  const index = db.wishlist.indexOf(productId);

  if (index > -1) {
    db.wishlist.splice(index, 1);
    return res.json({ favorited: false, message: 'Removido da wishlist' });
  } else {
    db.wishlist.push(productId);
    return res.json({ favorited: true, message: 'Adicionado à wishlist' });
  }
};

exports.removeFromWishlist = (req, res) => {
  const { produtoId } = req.params;
  const index = db.wishlist.indexOf(produtoId);
  if (index > -1) db.wishlist.splice(index, 1);
  res.json({ message: 'Item removido da wishlist' });
};