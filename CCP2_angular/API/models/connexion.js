const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema for Member
let Connexion = new Schema({

  Pseudo: {
    type: String

  },
  Password: {
    type: String

  }
}, {
  collection: 'Connexion'
});
module.exports = mongoose.model('Connexion', Connexion);
