db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: { percentual: { $gte: 40 }, tipo: "sódio" } } },
  { $push: { tags: "muito sódio" } },
);

db.produtos.find({}, { nome: true, tags: true, _id: false });