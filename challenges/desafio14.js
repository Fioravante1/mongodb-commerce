db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: { percentual: { $gt: 20, $lt: 40 }, tipo: "sódio" } } },
  { $push: { tags: "contém sódio" } },
);

db.produtos.find({}, { nome: true, tags: true, _id: false });