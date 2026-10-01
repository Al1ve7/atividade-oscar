// Configuração mock de dados para simular o banco de dados PostgreSQL
const db = {
  categorias: [
    { id: 'c1', nome: 'Alta Costura' },
    { id: 'c2', nome: 'Alfaiataria' },
    { id: 'c3', nome: 'Calçados' },
    { id: 'c4', nome: 'Acessórios' }
  ],
  produtos: [
    { id: 'p1', categoriaId: 'c2', nomeGrife: 'Gucci', tituloPeca: 'Sobretudo de Lã GG', preco: 18500.00, emDestaqueCarrossel: true },
    { id: 'p2', categoriaId: 'c4', nomeGrife: 'Prada', tituloPeca: 'Bolsa Cleo Saffiano', preco: 14200.00, emDestaqueCarrossel: true },
    { id: 'p3', categoriaId: 'c1', nomeGrife: 'Dior', tituloPeca: 'Vestido Seda Cannage', preco: 22000.00, emDestaqueCarrossel: false },
    { id: 'p4', categoriaId: 'c3', nomeGrife: 'Balenciaga', tituloPeca: 'Sneaker Triple S', preco: 7800.00, emDestaqueCarrossel: true },
    { id: 'p5', categoriaId: 'c4', nomeGrife: 'Hermès', tituloPeca: 'Cinto Fivela H', preco: 6900.00, emDestaqueCarrossel: false },
    { id: 'p6', categoriaId: 'c4', nomeGrife: 'Cartier', tituloPeca: 'Óculos Panthère', preco: 8400.00, emDestaqueCarrossel: false },
    { id: 'p7', categoriaId: 'c3', nomeGrife: 'Louboutin', tituloPeca: 'Scarpin So Kate', preco: 9500.00, emDestaqueCarrossel: true },
    { id: 'p8', categoriaId: 'c4', nomeGrife: 'Rolex', tituloPeca: 'Relógio Submariner', preco: 89000.00, emDestaqueCarrossel: true },
    { id: 'p9', categoriaId: 'c2', nomeGrife: 'Moncler', tituloPeca: 'Jaqueta Doudoune', preco: 12500.00, emDestaqueCarrossel: false },
    { id: 'p10', categoriaId: 'c4', nomeGrife: 'Chanel', tituloPeca: 'Perfume Grand Extrait', preco: 16000.00, emDestaqueCarrossel: false },
    { id: 'p11', categoriaId: 'c4', nomeGrife: 'Burberry', tituloPeca: 'Lenço Vintage Check', preco: 3400.00, emDestaqueCarrossel: false },
    { id: 'p12', categoriaId: 'c4', nomeGrife: 'Louis Vuitton', tituloPeca: 'Mala Keepall 55', preco: 21500.00, emDestaqueCarrossel: true }
  ],
  wishlist: ['p2', 'p7', 'p8']
};

module.exports = db;