const mongoose = require("mongoose");

const Article = mongoose.model(
  "Article",
  new mongoose.Schema({
    titre: String,
    description: String,
    contenu: String,
    auteur: String,
    data: Date
  })
);

module.exports = Article;
