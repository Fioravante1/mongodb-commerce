db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });
db.produtos.updateMany({ tags: { $in: ["bovino"] } }, { $inc: { avaliacao: 5 } });
db.produtos.updateMany({ tags: { $in: ["ave"] } }, { $inc: { avaliacao: 3 } });
db.produtos.find({}, { nome: true, avaliacao: true, _id: false });